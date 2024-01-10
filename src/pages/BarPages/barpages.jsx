import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

import Navbar from "../../components/Navbar/navbar";

const BarPages = () => {
        const options1 = {
            responsive: true,
            plugins: {
            legend: {
                // position: 'top' as const,
            },
            title: {
                display: true,
                text: 'React Chart.Js Bar',
            },
            },
        };

        const data1 = {
            labels: ["senin, selasa, rabu"],
            datasets: [
            {
                label: "data pemasukan",
                data: [70000, 90000, 600000],
                backgroundColor: "red",
            },
            {
                label: "data pengeluaran",
                data: [10000, 100000, 7000],
                backgroundColor: "blue",
            }
            ]
        }
    return (
        <div>
            <Navbar />
            <div style={{width: '500px'}}>
                <Bar options={options1} data={data1} />
            </div>
        </div>
    );
}

export default BarPages;