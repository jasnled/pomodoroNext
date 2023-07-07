import { Chart } from "@/components/Chart.js";
import styles from "@/styles/chartContainer.module.scss";
import { Icon } from 'react-icons-kit';
import {xCircle} from 'react-icons-kit/feather/xCircle';
import {boldRight} from 'react-icons-kit/entypo/boldRight';
import {boldLeft} from 'react-icons-kit/entypo/boldLeft'

const chart = ({pomodoros, setChart, setPages, pages}) => {
  
  const handleClose = () => {
    setChart(false);
  };
  console.log(pomodoros?.timeSpent);
  const data = {
    datasets:[{ //
      label: 'Hours', 
      data: pomodoros.timeSpent,
      borderWidth: 2,
      backgroundColor: ['#1d8bb9'] // paleta de colores para nuestro grafico de barras
    }] //de donde vamos a obtener la data que le pasaremos a chart 
  };
  const handleArrowRight = () => {
    if(!(pages == 0)){
      setPages(--pages);
    };
  };

  const handleArrowLeft = () => {
    setPages(++pages);
  };
    return (
        <div className={styles["chart-background"]}>
          <div className={styles["chart-container"]}>
            <div className={styles["title-container"]}>
              <h2>{`Week (hours)`}</h2>
              <div onClick={handleClose} className={styles["icon-close"]}>
                <Icon size={'100%'} icon={xCircle}/>
              </div>
            </div>
            <Chart chartData={data}/>
            <div className={styles.pages}>
              <div onClick={handleArrowLeft} className={styles["arrow-container-icon"]}>
                <Icon size={'100%'} icon={boldLeft}/>
              </div>
              <div onClick={handleArrowRight} className={styles["arrow-container-icon"]}>
                <Icon size={'100%'} icon={boldRight}/>
              </div>
            </div>
          </div>
        </div>
    );
}

export default chart;