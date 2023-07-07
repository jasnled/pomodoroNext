import React, { createContext, useContext, useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";
import { endPoint } from "@/services/api";
import {useCurrentPomodoro}  from '@/hooks/useCurrentPomodoro.js';
import {useUpdateState} from '@/hooks/useUpdateState.js';
import useSound from "use-sound";
import soundFile from "../../public/sounds/ringtone.mp3"; 


const AuthContext = createContext();

var loop;

const optionBreak = [
    'short break',
    'long break'
]

function useProviderAuth(){
    const [user, setUser] = useState(null);
    const [time, setTime] = useState();
    const [run, setRun] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);
    const [opBreak, setOpBreak] = useState(false);
    const [title, setTitle] = useState(null);
    const [pomodoroCount, setPomodoroCount] = useState(0);
    const currentPomodoro = useCurrentPomodoro();
    const updateState = useUpdateState();

    const [play] = useSound(soundFile);

    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };

    const signIn = async (email, password) => {     
        
        const tokenCookie = Cookie.get('pomodoro-token');
        let access_token;
        if(tokenCookie){
            access_token = tokenCookie;
        } else if (email){
            try{
                const { data: {token} } = await axios.post(endPoint.auth.login, {email, password}, options);
                access_token = token;
            }catch(err){
                access_token = null;
                setUser(null);
            }
        };
        if (access_token){
            if(!tokenCookie){
                window.location.href = '/';
                Cookie.set('pomodoro-token', access_token, { expires: 5 });
                
            }
            axios.defaults.headers.Authorization = `Bearer ${access_token}`;
            try{            
              const {data: user} = await axios.get(endPoint.profile.profile, options); //end point del profile
              setUser(user);

            }catch(err){

            }  
        };
    };

  

    const timer = (timeMax, initialTim, pomodoro, currentT) => {
        loop = setInterval(()=>{
                const initialT = new Date(initialTim);
                const now = new Date();
                var diffTim = now.getTime() - initialT.getTime();
                diffTim /= 1000;
                const diffSeg = Math.trunc(diffTim);
                if (diffSeg < timeMax){
                    if(!opBreak ){
                        try {
                            if(diffSeg%7 == 0){
                                currentPomodoro.updatePomodoro(pomodoro.id, {timeSpent: diffSeg}, options);
                            };
                        } catch (error) {            
                        }
                    }
                    setTime(timeMax - diffSeg);
                } else {
                    if(!opBreak){
                        try {

                            currentPomodoro.updatePomodoro(pomodoro.id, {timeSpent: timeMax, run: false});
                            updateState.updateTask(currentT.id, {done:true});
                            updateState.updateUser({currentTaskId: null});
                            setCurrentTask(null);
                            currentPomodoro.setPomodoro(null);
                        } catch (error) {          
                            console.log(error);
                        }
                        setPomodoroCount(pomodoroCount+1);
                        setTimeout(() => {
                            
                            assignBreak(pomodoroCount+1);    
                        }, 2000);
                    }else{
                        setTimeout(() => {
                            handlePomodoro();    
                            alert(`the break is over`);
                        }, 1000);
                        
                    }
                    setTime(0);
                    showNotification();
                    play();
                }
        }, 1000);
    };
    const clearTimer = () => {
        clearInterval(loop);
        setRun(false);
    }

    const showNotification = () => {
        if (Notification.permission === 'granted') {
          new Notification("it's over", {
            body: "¡it's to ring the bell!",
            vibrate: [200, 100, 200], // Vibración del dispositivo (opcional)
            sound: '../../public/sounds/ringtone.mp3' // Sonido personalizado (opcional)
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              showNotification();
            }
          });
        }
    };

    const handleBreak = (optionB, time) => {
        setOpBreak(true);
        setTitle(optionB);
        setTime(time);
        clearTimer();
    };

    const handlePomodoro = async () => {
        setOpBreak(false);
        await getCurrentTask();
        checkPomodoro();
        clearTimer();
        
    };

    const assignBreak = (pomoCount) => {
        if(pomoCount%4 == 0){
            handleBreak(optionBreak[1], user?.config.longBreak || 10*60 );
        }else{
            handleBreak(optionBreak[0], user?.config.shortBreak || 5*60 );
        };
    };

    const getCurrentTask = async (idTask)=>{
        var currentTaskElement
        if(user?.currentTaskId){
            try {
                currentTaskElement = await axios.get(endPoint.task.getOne(user.currentTaskId));
                currentTaskElement = currentTaskElement.data;
                setCurrentTask(currentTaskElement);    
            } catch (error) {
        
            }
        }else if(idTask)
        {
            try {
                currentTaskElement = await axios.get(endPoint.task.getOne(idTask));    
                currentTaskElement = currentTaskElement.data;
                setCurrentTask(currentTaskElement);
            } catch (error) {
                
            }
        }
        else{
            setCurrentTask(null);
        }
        return currentTaskElement;
    };
    useEffect(()=>{
            getCurrentTask();
    },[user])
    
    const logout = () => {
        Cookie.remove('pomodoro-token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    const checkPomodoro = async () => {
        
        if(currentTask && !currentTask?.done){
            setTitle(currentTask?.taskName);
        }else{
            setTitle(null);
        }
        if(currentTask?.pomodoro && !currentTask?.done && !run){
            setTime(currentTask?.pomodoro.value - currentTask?.pomodoro.timeSpent);
    
        }else if(run){

        }
        else{
            setTime(user?.config.pomodoro || 25*60);
        }    
    

    };

    return {
        handleBreak,
        handlePomodoro,
        checkPomodoro,
        user,
        currentTask,
        setCurrentTask,
        signIn,
        logout,
        time,
        setTime,
        run, 
        setRun,
        timer,
        clearTimer,
        title,
        setTitle,
        opBreak, 
        setOpBreak,
        currentPomodoro,
        getCurrentTask
    };
};

function ProviderAuth({ children }){
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
};

const useAuth = () => {
    return useContext(AuthContext);
};

export{ProviderAuth, useAuth};