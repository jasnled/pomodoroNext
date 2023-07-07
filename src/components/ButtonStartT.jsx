import React from 'react';
import axios from 'axios';
import { endPoint } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';
const ButtonStartT = ({element}) => {
    const auth = useAuth();
    const id = `active ${element.id}`;
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const handleActiveTask = async () => {
        if(!auth?.run){
            if(auth?.user?.currentTaskId == element.id){
                try {
                    await axios.patch(endPoint.user.update, {currentTaskId: null}, options)
                } catch (error) {
                }
            }else{
                try{
                    await axios.patch(endPoint.user.update, {currentTaskId: element.id}, options)
                }catch(error){
                }  
            }
            await auth.signIn();
        }
    }
   
    return (
        <button className="Start" onClick={()=>{handleActiveTask(element.id)}} id = {id}>{(auth.user?.currentTaskId ==  element.id) ?`active`:`inactive`}</button>
    );
}

export default ButtonStartT;