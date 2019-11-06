import React from 'react';

import { Line } from 'react-chartjs-2';

const LineGraph = props => {
    const datesArray = props.datesArray ? props.datesArray.slice(-4) : [];

    const metricValuesArray = props.values ? props.values.slice(-4) : [];

    const bpOverArray = props.bpOverArray ? props.bpOverArray.slice(-4) : [];

    const bpUnderArray = props.bpUnderArray ? props.bpUnderArray.slice(-4) : [];

    const bloodGlucoseData = {
        labels: datesArray,
        datasets: [
            {
                fill: true,
                lineTension: 0.3,
                backgroundColor: '#F9DDE0',
                borderColor: '#FF98A2',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: '#FF98A2',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#FF98A2',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                spanGaps: true,
                data: metricValuesArray
            }
        ]
    };

    const weightData = {
        labels: datesArray,
        datasets: [
            {
                fill: true,
                lineTension: 0.3,
                backgroundColor: '#C4F5A6',
                borderColor: 'rgba(126, 197, 82, 0.8)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(126, 197, 82, 0.8)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(126, 197, 82, 0.8)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                spanGaps: true,
                data: metricValuesArray
            }
        ]
    };

    const bloodPressureData = {
        labels: datesArray,
        datasets: [
            {
                label: 'Systolic',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(28, 160, 244, 0.3)',
                borderColor: 'rgba(28, 160, 244, 0.7)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(28, 160, 244, 0.7)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(28, 160, 244, 0.7)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                spanGaps: true,
                data: bpOverArray
            },
            {
                label: 'Diastolic',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(66, 81, 245, 0.3)',
                borderColor: 'rgba(66, 81, 245,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(66, 81, 245,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(66, 81, 245,1)',
                pointHoverBorderColor: 'rgba(66, 81, 245,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                spanGaps: true,
                data: bpUnderArray
            }
        ]
    };

    if (props.metricType === 'bloodGlucose') {
        return (
            <div className='line-graph'>
                <Line data={bloodGlucoseData} legend={{ display: false }} />
            </div>
        );
    }
    if (props.metricType === 'weight') {
        return (
            <div className='line-graph'>
                <Line data={weightData} legend={{ display: false }} />
            </div>
        );
    }
    if (props.metricType === 'bloodPressure') {
        return (
            <div className='line-graph'>
                <Line data={bloodPressureData} legend={{ display: false }} />
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default LineGraph;
