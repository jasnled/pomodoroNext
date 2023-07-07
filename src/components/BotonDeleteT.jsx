import React from 'react';
import axios from 'axios';
import { endPoint } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';

const BotonDeleteT = ({element, alert, getTasks}) => {
    const auth = useAuth(); 
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const handleDelete = async (id) =>{
        if(auth.run && (id == auth.user.currentTaskId)){
            return;
        }
        try{
            await axios.delete(endPoint.task.deleteOne(id), options); 
            if(id == auth.user.currentTaskId){
                await axios.patch(endPoint.user.update, {currentTaskId: null}, options);
            }
            await auth.signIn();
        }catch(error){
            alert.setAlert({
                ...alert.alert,
                active:true,
                message: "There has been an error. Try again"
            });
            return;
        }
        await getTasks();
    };

    const id = `delete ${element.id}`

    return (

        <button className="delete" onClick={()=>handleDelete(element.id)} id = {id}>delete</button>
    );
}

export default BotonDeleteT;