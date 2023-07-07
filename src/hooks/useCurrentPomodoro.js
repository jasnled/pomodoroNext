import { useState } from "react";
import axios from "axios";
import { endPoint } from "@/services/api";



const useCurrentPomodoro = () => {
    const [pomodoro, setPomodoro] = useState(null);


    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const createPomodoro = async (data) => {
        var newPomodoro
        try {
            const corretedValue = Math.abs(data.value);
            newPomodoro = await axios.post(endPoint.pomodoro.create,{value: corretedValue}, options);
        } catch (error) {
            
        }   

        return newPomodoro.data;
    };
    
    const updatePomodoro = async (id, data) => {
        try {
            await axios.patch(endPoint.pomodoro.update(id),{...data } ,options);
        } catch (error) {
            return;
        }
    };
    return ({
        createPomodoro,
        updatePomodoro,
        pomodoro,
        setPomodoro
    });
}

export{ useCurrentPomodoro };