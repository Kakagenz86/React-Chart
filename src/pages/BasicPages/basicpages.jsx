import Chart from 'react-apexcharts';
import Navbar from '../../components/Navbar/navbar';

const BasicPages = () => {
        const state = {
        options: {
            chart: {
            id: 'basic-bar',
            },
            xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
        },
        series: [{
            name: 'Sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 130, 140, 160],
        }],
        
    }

        return (
            <div>
                <Navbar />
                <div>
                    <Chart options={state.options} series={state.series} width={500} height={300} />
                </div>
            </div>
        );
    }


export default BasicPages;
