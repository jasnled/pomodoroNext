import React from 'react';


import styles from "@/styles/botonAddTask.module.scss"


const BotonAddTask = () => {

    return (
    <div className = {styles["container-input"]}>
        <input className = {styles.input}  type="text" placeholder="enter task"/>
        <button className = {styles.bAdd} type="submit">add task</button>
    </div>
    );
}

export default BotonAddTask;