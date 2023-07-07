import { endPoint } from "@/services/api";
import axios from "axios";
import { useState } from "react";

const usePomodoros = () => {
    const[pomodoros, setPomodoros] = useState(null);
    const[timeSpent, setTimeSpent] = useState(null);
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const getPomodoros = async () => {
        try{
            const allPomodoros = await axios.get(endPoint.pomodoro.getAll, options);
            setPomodoros(allPomodoros.data);
        }catch(error){
            
        }
    };

    // Obtener la fecha de hace 7 días
    const getTimeSpentForDay =  async (num_week) =>{
        const week = num_week;
        const today = new Date();
        const date7DaysAgo = new Date();
        date7DaysAgo.setDate(today.getDate() - (6+7*week));
        const optionsDate = {year:"numeric", month:"numeric", day:"numeric"}
        // Generar las fechas de los últimos 7 días
        const last7Days = [];
        var timeSpentForDay = [];
        for (let i = 0; i < 7; i++) {
          var date = new Date(date7DaysAgo);
          date.setDate(date7DaysAgo.getDate() + i);
          const weekday = date.toLocaleDateString('en-US',{weekday:"short", month:"short", day:"numeric"});  
          date = date.toLocaleDateString('en-US', optionsDate);
          last7Days.push(date);

          timeSpentForDay.push([weekday, 0]);  
        }

        pomodoros?.map( pomodoro =>{
            var localDatePomodoro = new Date(pomodoro.createdAt);
            localDatePomodoro = localDatePomodoro.toLocaleDateString('en-US', optionsDate);
            for (let i=0; i < 7; i++){
                const day = last7Days[i];
                if(day == localDatePomodoro){
                    timeSpentForDay[i][1] += pomodoro.timeSpent/3600;
                }
            }
        });

        const entries = new Map(timeSpentForDay);
        const obj = Object.fromEntries(entries);
        setTimeSpent(obj);
        console.log(obj)


        
    }


    return ({
        timeSpent,
        pomodoros,
        getPomodoros,
        getTimeSpentForDay
    });
}

export { usePomodoros };