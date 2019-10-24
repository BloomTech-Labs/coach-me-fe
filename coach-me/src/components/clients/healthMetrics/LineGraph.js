import React from 'react';

import { Line } from 'react-chartjs-2';

const LineGraph = props => {

    const datesArray = props.datesArray ? props.datesArray.slice(-4) : [];

    const metricValuesArray = props.values ? props.values.slice(-4) : [];

    const bpOverArray = props.bpOverArray ? props.bpOverArray.slice(-4) : [];

    const bpUnderArray = props.bpUnderArray ? props.bpUnderArray.slice(-4) : [];

    const data = !props.bpOverArray
        ? {
              labels: datesArray,
              datasets: [
                  {
                      fill: true,
                      lineTension: 0.3,
                      backgroundColor: 'rgba(75,192,192,0.4)',
                      borderColor: 'rgba(75,192,192,1)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(75,192,192,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                      pointHoverBorderColor: 'rgba(220,220,220,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 5,
                      pointHitRadius: 10,
                      data: metricValuesArray
                  }
              ]
          }
        : {
              labels: datesArray,
              datasets: [
                  {
                      label: 'Over',
                      fill: true,
                      lineTension: 0.3,
                      backgroundColor: 'red',
                      borderColor: 'rgba(75,192,192,1)',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(75,192,192,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                      pointHoverBorderColor: 'rgba(220,220,220,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 5,
                      pointHitRadius: 10,
                      data: bpOverArray
                  },
                  {
                      label: 'Under',
                      fill: true,
                      lineTension: 0.3,
                      borderColor: 'red',
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: 'rgba(75,192,192,1)',
                      pointBackgroundColor: '#fff',
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                      pointHoverBorderColor: 'rgba(220,220,220,1)',
                      pointHoverBorderWidth: 2,
                      pointRadius: 5,
                      pointHitRadius: 10,
                      data: bpUnderArray
                      //   data: [1, 2, 3, 4, 5, 6, 7]
                  }
              ]
          };

    return (
        <div className='line-graph'>
            <Line data={data} legend={{ display: false }} />
        </div>
    );
};

export default LineGraph;
