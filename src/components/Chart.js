import { Chart as ChartJS, CategoryScale, LinearScale,
BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
    return(
    <>
        <Bar 
            data={chartData} // los datos que le transmitiremos
            options={{
                title: {
                    display: true, //se nos muestre la info
                    text: 'Hours',
                    fontSize: 20
                },
                legend: {
                    display:true,
                    position: 'right'
                },
                responsive: true,
            }}
                
        /> 
    </>
    );
};