import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

import Navbar from "../../components/Navbar/navbar";

const LinePages = () => {
        const options3 = {
            responsive: true,
            plugins: {
            legend: {
                // position: 'top' as const,
            },
            title: {
                display: true,
                text: 'React Chart.js Line',
            },
            },
        };
        
        const data3 = {
            labels: ['januari', 'februari', 'maret'],
            datasets: [
            {
                label: 'Dataset 1',
                data: [1000, 3000, 5000],
                backgroundColor: 'purple',
            },
            {
                label: 'Dataset 2',
                data: [2000, 4000, 6000],
                backgroundColor: 'yellow',
            },
            ],
        }
    return (
        <div>
            <Navbar />
            <div style={{width: '500px'}}>
                <Line options={options3} data={data3} />
            </div>
        </div>
    );
}

export default LinePages;