// components/BarChart.js
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = ({ data }) => {

    // ambil semua nilai dataset
    const allData = data.datasets.flatMap(ds => ds.data);

    // cari nilai minimum & maksimum
    const minValue = Math.min(...allData);
    const maxValue = Math.max(...allData);

    const options = {
        responsive: true,

        plugins: {
            legend: {
                position: 'top',
            },
        },

        scales: {
            y: {
                // zoom otomatis
                min: minValue - 0.05,
                max: maxValue + 0.01,

                ticks: {
                    stepSize: 0.005
                }
            }
        }
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;