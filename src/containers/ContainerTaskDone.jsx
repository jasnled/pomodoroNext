import React from 'react';
import styles from "@/styles/containerTaskDone.module.scss";
import axios from 'axios';
import { endPoint } from '@/services/api';

const ContainerTaskDone = ({arrayTasks:{ tasksDone }, alert, getTasks}) => {
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const handleClear = async () => {
        if(tasksDone.length){
            try{
                await axios.delete(endPoint.task.deleteDone, options);
            }catch(error){
                alert.setAlert({
                    ...alert.alert,
                    active:true,
                    message: "There has been an error. Try again"
                });
                return;
            };
            alert.setAlert({
                ...alert.alert,
                active: true,
                message: "Deleted task done",
                autoClose: true
            });
            await getTasks();
        }
    };
    return (
        <div className={`${styles.box} ${styles["box-tasks-done"]}`}>
            <div className={styles['task-done-title']}>
                <span >Tasks Done</span>
                <button onClick={handleClear}>clear</button>
            </div>
            <div className = {styles["container-tasks-done"]}>
            {tasksDone?.map(task => {
                    if(task.done){
                        const id=`task-done-${task.id}`;
                        return(
                        <div className={styles['task-element-done']} key = {id}>
                            <span key = {id}>
                                {task.taskName}
                            </span>
                        </div>)}
            })}
            </div>
        </div>
    );
}

export default ContainerTaskDone;