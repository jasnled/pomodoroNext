import React, { useRef } from 'react';
import styles from "@/styles/botonAddTask.module.scss"
import axios from 'axios';
import { endPoint } from '@/services/api';

const BotonAddTask = ({getTasks}) => {
    const newTaskRef = useRef(null);
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const handleAddTask = async (event) => {
        event.preventDefault();
        const newTask = newTaskRef.current.value;
        if(newTask){
            try{
                await axios.post(endPoint.task.create, {taskName: `${newTask}`}, options);
                await getTasks();
                newTaskRef.current.value = null;
            }catch(error){
                console.log(error);
            }
        }
     
    };
    return (
    <div className = {styles["container-input"]}>
        <form onSubmit={handleAddTask}>
            <input  ref={newTaskRef} className = {styles.input}  type="text" placeholder="enter task"/>
            <button className = {styles.bAdd} type="submit">add task</button>
        </form>
    </div>
    );
}

export default BotonAddTask;