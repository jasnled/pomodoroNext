import React from 'react';
import styles from "@/styles/containerTaskDone.module.scss";

const ContainerTaskDone = () => {
    const arrayTask = [{
        taskName:"hfdusia",
        done: true,
        id:"fdsa"
    }]
    return (
        <div className={`${styles.box} ${styles["box-tasks-done"]}`}>
            <div className={styles['task-done-title']}>
                <span >Tasks Done</span>
                <button >clear</button>
            </div>
            <div className = {styles["container-tasks-done"]}>
            {arrayTask.map(task => {
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