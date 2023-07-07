import styles from '@/styles/timerContainer.module.scss';
import Time from '@/components/Time';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const TimerContainer = () => {
    const optionBreak = [
        'short break',
        'long break'
    ]
    const auth = useAuth();

    useEffect(()=>{
        if(!auth.run && !auth.opBreak){
            auth.signIn();
        }
        if (Notification.permission !== 'denied') {
            Notification.requestPermission();
        }
    }
    ,[]);

    useEffect(()=>{
        if(!auth.opBreak){        
            auth.checkPomodoro()
        }
    }, [auth.user, auth.currentTask])
    
    const handleStart = async () => {
        var newPomodoro;
        var currentT;
        if(!auth.run){
            auth.setRun(true);
            if(!auth.opBreak){
                try{
                    newPomodoro = await auth.currentPomodoro.createPomodoro({value: auth.time});
                    auth.currentPomodoro.setPomodoro(newPomodoro);
                    currentT = await auth.getCurrentTask(newPomodoro.taskId);
                    auth.setCurrentTask(currentT);
                }catch(error){
                }
            }
            const initialTime = new Date;
            auth.timer(auth.time, initialTime, newPomodoro, currentT);
            
        }else{
            if(!auth.opBreak){
                try {
                    await auth.currentPomodoro.updatePomodoro(auth.currentPomodoro.pomodoro.id, {run: false});
                } catch (error) {                   
                }
            }
            auth.setRun(false);
            auth.clearTimer();
           
        }   
    };


    return (
    <div className={styles["container-t"]}>
        <div>
            <ul className = {styles.options}>
                <li className={styles.options} onClick={auth.handlePomodoro}>pomodoro</li>
                <li className={styles.options} onClick={()=>auth.handleBreak(optionBreak[0], auth.user?.config.shortBreak || 5*60 )}>short break</li>
                <li className={styles.options} onClick={()=>auth.handleBreak(optionBreak[1], auth.user?.config.longBreak || 10*60 )} >long break</li>
            </ul>
        </div>
        <p className={styles.title}>{auth.title}</p>
        <Time tim = {auth?.time}/>
        <button onClick={handleStart} className={styles.start}>{!auth.run? 'start':'stop' }</button>
    </div>
    );
}

export default TimerContainer;