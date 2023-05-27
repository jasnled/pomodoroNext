import React from 'react';
import styles from "@/styles/containerTask.module.scss";
import BotonDeleteT from '../components/BotonDeleteT';
import ButtonStartT from '../components/ButtonStartT';


const ContainerTask = () => {
    const arrayTask = [{
        taskName:"tarea",
        id:"dlaksd-567765"
    }];
    return (
        <div className={`${styles.box} ${styles["box-tasks"]}`}>
            <span>Tasks</span>
            <div className={styles["container-tasks"]}>
                {arrayTask.map( task => {
                    if(!task.done){
                    return(
                    <div className={styles['task-element']} key= {task.id}>
                        <span>
                            {task.taskName}
                        </span>
                        <BotonDeleteT element={task} key={`delete-${task.id}`}/>
                        <ButtonStartT element={task} key={`start-${task.id}`}/>
                    </div>)}
            })}
            </div>
        </div>
    );
}

export default ContainerTask;