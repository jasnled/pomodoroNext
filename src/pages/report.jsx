import React from 'react';
import BotonAddTask from '../components/BotonAddTask';
import ContainerTask from '../containers/ContainerTask';
import ContainerTaskDone from '../containers/ContainerTaskDone';
import styles from "@/styles/report.module.scss";

const Report = () => {

    return (
        <div className={`${styles['container-section']} ${styles.inactive}`}>
            <div className = {styles.container}>
             <BotonAddTask/>
             <ContainerTask/>
             <ContainerTaskDone/>
            </div>
        </div>
        
    );
}

export default Report;