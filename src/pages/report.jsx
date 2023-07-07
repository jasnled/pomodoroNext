import React, { useState, useEffect } from 'react';
import BotonAddTask from '../components/BotonAddTask';
import ContainerTask from '../containers/ContainerTask';
import ContainerTaskDone from '../containers/ContainerTaskDone';
import ChartContainer from '@/containers/ChartContainer';
import styles from "@/styles/report.module.scss";
import { Icon } from 'react-icons-kit'
import {barChart} from 'react-icons-kit/feather/barChart'
import { endPoint } from '@/services/api';
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { useAlert } from '@/hooks/useAlert';
import Alert from '@/components/Alert';
import { usePomodoros } from "@/hooks/usePomodoros";


const Report = () => {
    const auth = useAuth();
    const alert = useAlert();
    const pomodoros = usePomodoros(); 
    const [arrayTasks, setArrayTasks]=useState({});
    const [chart, setChart] = useState(false);
    const [pages, setPages] = useState(0);
    const options = {
        headers: {
            accept: '*/*',
            'Content-type': 'application/json',
        }
    };
    const getTasks = async () => {
        try {
            if(auth.user){
                const allTasks = await axios.get(endPoint.task.getAll, options);
                const tasks = allTasks.data.filter(task => task.done == false);
                const tasksDone = allTasks.data.filter(task => task.done == true);
                setArrayTasks({tasks,tasksDone});
            }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        auth.signIn();
    },[]);
    useEffect(() => {
        getTasks();
        pomodoros.getPomodoros();
    },[auth.user, auth.run]);

    useEffect(()=>{
        pomodoros.getTimeSpentForDay(pages);
    }, [pomodoros.pomodoros, pages]);
    
    return (
        <div className={`${styles['container-section']} ${styles.inactive}`}>
            {chart && <ChartContainer pomodoros={pomodoros} setChart={setChart} setPages={setPages} pages={pages}/>}
            <div className={styles['container']}>
                <Alert alert={alert}/>
                <div className = {styles["container-grip"]}>
                 <BotonAddTask getTasks={getTasks} />
                 <div className={styles.chart} onClick={()=> setChart(true)} ><Icon size={'100%'} icon={barChart}/></div>
                 <ContainerTask arrayTasks={arrayTasks} alert={alert} getTasks={getTasks}/>
                 <ContainerTaskDone arrayTasks={arrayTasks} alert={alert} getTasks={getTasks}/>
                </div>
            </div>
        </div>
        
    );
}

export default Report;