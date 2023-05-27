import React from 'react';
import styles from '@/styles/timer.module.scss';


const Boton = ({ option}) => {

    return (
        <li className={styles.options} id = {option.id}>{option.content}</li>
    );
}

export default Boton;