import React from 'react';
import styles from '@/styles/time.module.scss';

const Time = ({tim}) => {
    
    let min = parseInt(tim/60);
    min = min < 10 ? `0${min}`: min;

    let sec = parseInt(tim%60);
    sec = sec < 10 ? `0${sec}`: sec;

    return (
        <div className={styles.timer}>{`${min}:${sec}`}</div>
    );
}

export default Time;