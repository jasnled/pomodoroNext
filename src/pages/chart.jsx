import { Chart } from "@/components/Chart.js";
import styles from "@/styles/chartContainer.module.scss";


const chart = () => {

  const data = {
    datasets:[{ //
      label: 'Hours', 
      data: {friday: 1.2, thursday:3, wednesday:4, tuesday:3, monday: 8, sunday:5, saturday: 4}, 
      borderWidth: 2,
      backgroundColor: ['#1d8bb9'] // paleta de colores para nuestro grafico de barras
    }] //de donde vamos a obtener la data que le pasaremos a chart 
  };

    return (
      <div className={styles["chart-container"]}>
        <Chart chartData={data}/>
      </div>
    );
}

export default chart;