import React from 'react';
import styles from '@/styles/timer.module.scss';
import TimerContainer from '@/containers/TimerContainer';

export default function Home() {

return (
<div className={styles["timer-container"]}>
   <TimerContainer/>
</div>
);

}
