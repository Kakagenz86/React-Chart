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

import { Pie } from 'react-chartjs-2';

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

const PiePages = () => {
        const data2 = {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
            {
                label: 'data pemasukan',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'crimson',
            },
            {
                label: 'data pengeluaran',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: 'green',
            }
            ],
        };
    return (
        <div>
            <Navbar />
            <div style={{width: '500px'}}>
                <Pie data={data2} />
            </div>
        </div>
    );
}

export default PiePages;