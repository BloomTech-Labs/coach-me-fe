import React from 'react';

import { Line } from 'react-chartjs-2';

const LineGraph = props => {
    console.log('clientData', props);

    const datesArray = props.datesArray ? props.datesArray.slice(-4) : [];
    console.log('datesArray-4', datesArray);

    // const metricValuesArray = props.clientData.clientData.map(value => {
    //     // console.log('value', value.fields.Blood_sugar);
    //     return value.fields.Blood_sugar;
    // });
    // console.log('metricValuesArray', metricValuesArray);

    const metricValuesArray = props.values ? props.values.slice(-4) : [];
    console.log('values', metricValuesArray);

    const bpOverArray = props.bpOverArray ? props.bpOverArray.slice(-4) : [];
    console.log('bpOverArray', bpOverArray);

    const bpUnderArray = props.bpUnderArray ? props.bpUnderArray.slice(-4) : [];
    console.log('bpUnderArray', bpUnderArray);

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
                      //   data: [1, 2, 3, 8, 7, 0]
                  },
                  {
                      label: 'Under',
                      fill: true,
                      lineTension: 0.3,
                      //   backgroundColor: 'pink',
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
        <div>
            <Line data={data} legend={{ display: false }} />
        </div>
    );
};

export default LineGraph;
