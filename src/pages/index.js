import React from 'react';
import styles from '@/styles/timer.module.scss';
import Boton from '../components/Boton';
import Time from '../components/Time';

export default function Home() {
  let options = [
    {
        id : 'pomo',
        content : 'Pomodoro',
        time: 25*60
    },
    {
        id : 'sBreak',
        content : 'Short Break',
        time: 5*60
    },
    {
        id : 'lBreak',
        content : 'Long Break',
        time: 15*60
    }
]

return (
<div className={styles["timer-container"]}>
    <div className={styles["container-t"]}>
        <div>
            <ul className = {styles.options}>
                {options.map( opt => (
                    <Boton option={opt} key = {opt.id} />
                ))}
            </ul>
        </div>
        <p className={styles.title}>{options[0].content}</p>
        <Time tim = {25*50}/>
        <button className={styles.start}>start</button>
    </div>
</div>
);

}
