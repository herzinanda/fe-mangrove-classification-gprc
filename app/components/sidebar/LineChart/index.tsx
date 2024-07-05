import { Line } from 'react-chartjs-2';
import { CategoryScale, Chart, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const prepareChartData = (data) => {
    const labels = data.map(item => item.iter);
    const accuracyData = data.map(item => item.accuracy);
    const f1ScoreData = data.map(item => item['f1-score']);
    const precisionData = data.map(item => item.precision);
    const recallData = data.map(item => item.recall);

    return {
        labels,
        datasets: [
            {
                label: 'Accuracy',
                data: accuracyData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                label: 'F1 Score',
                data: f1ScoreData,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                label: 'Precision',
                data: precisionData,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
            },
            {
                label: 'Recall',
                data: recallData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
        options: {
            scales: {
                x: {
                    type: 'linear',
                    display: true,
                    title: {
                        display: true,
                        text: 'Iteration',
                    },
                },
                y: {
                    type: 'linear',
                    display: true,
                    title: {
                        display: true,
                        text: 'Value',
                    },
                },
            },
        },
    };
};

const ChartComponent = ({ data }) => {
    const chartData = prepareChartData(data);

    return (
        <div>
            <Line data={ chartData } />
        </div>
    );
};

export default ChartComponent;