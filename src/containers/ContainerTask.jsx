import React from 'react';
import styles from "@/styles/containerTask.module.scss";
import BotonDeleteT from '@/components/BotonDeleteT';
import ButtonStartT from '@/components/ButtonStartT';
import { useAuth } from '@/hooks/useAuth';




const ContainerTask = ({arrayTasks:{tasks}, alert, getTasks}) => {
    const auth = useAuth();
    return (
        <div className={`${styles.box} ${styles["box-tasks"]}`}>
            <span>Tasks</span>
            <div className={styles["container-tasks"]}>
                {tasks?.map(task => {
                    if(!task?.done){
                    return(
                    <div className={styles['task-element']} key= {task.id}>
                        <span>
                            {task.taskName}
                        </span>
                        <BotonDeleteT getTasks={getTasks} alert={alert} element={task} key={`delete-${task.id}`}/>
                        <ButtonStartT getTasks={getTasks} alert={alert} element={task} key={`start-${task.id}`}/>
                    </div>)}
            })}
            </div>
        </div>
    );
}

export default ContainerTask;