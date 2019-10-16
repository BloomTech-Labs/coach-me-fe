import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HealthMetricCards from './HealthMetricCards';
import MetricDisplay from './MetricDisplay';

import './healthMetrics.scss';

const HealthMetric = props => {
    const [clientData, setClientData] = useState([]);

    // Following state controls the history toggle functionality:
    const [toggleHistory, setToggleHistory] = useState(false);

    // used to convert the labels and heading of the HealthMetricCard component into either one of the three metrics.
    const [historyLabel, setHistoryLabel] = useState('');
    const [historyScale, setHistoryScale] = useState('');

    useEffect(() => {
        for (let i = 0; i < props.checkinList.length; i++) {
            // console.log(props.checkinList[i]);
            axios
                .get(
                    `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/?filterByFormula=OR({Most recent blood pressure?}!='',{Most recent weight? (pounds)}!='',{Most recent blood glucose level?}!='')&api_key=keyfahybUIpBkegFv`
                )
                .then(results => {
                    for (let j = 0; j < results.data.records.length; j++) {
                        // console.log(results.records[j]);
                        if (
                            results.data.records[j].id === props.checkinList[i]
                        ) {
                            // console.log(
                            //     'found some records',
                            //     results.data.records[j]
                            // );
                            setClientData(previous => {
                                return [...previous, results.data.records[j]];
                            });
                        }
                    }
                })

                .catch(error => {
                    console.log(error);
                });
        }
    }, [props.checkinList]);

    const handleClick = (label, heading) => {
        setToggleHistory(true);
        setHistoryLabel(heading);
        setHistoryScale(label);
    };

    if (toggleHistory) {
        return (
            <>
                <h2>Hello There!</h2>
                {console.log(historyLabel, historyScale, toggleHistory)}
                <HealthMetricCards
                    historyLabel={historyLabel}
                    historyScale={historyScale}
                    setToggleHistory={setToggleHistory}
                    clientData={clientData}
                />
            </>
        );
    } else {
        return (
            <div className='metric-container'>
                <div className='metric-header'>
                    <h3>Hello</h3>
                    <h2>Name</h2>
                    {console.log(clientData)}
                </div>
                <div className='metric-values'>
                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <svg
                                    width='15'
                                    height='15'
                                    viewBox='0 0 15 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M5.83011 0.627567C5.60455 -0.190047 4.42557 -0.228115 4.16989 0.627567C2.84119 5.10939 0 6.32728 0 9.48609C0 12.2827 2.23636 14.5455 5 14.5455C7.76364 14.5455 10 12.2827 10 9.48609C10 6.31137 7.16506 5.12984 5.83011 0.627567ZM5 12.7273C3.24574 12.7273 1.81818 11.2997 1.81818 9.54546C1.81818 9.29433 2.02159 9.09092 2.27273 9.09092C2.52386 9.09092 2.72727 9.29433 2.72727 9.54546C2.72727 10.7986 3.74688 11.8182 5 11.8182C5.25114 11.8182 5.45455 12.0216 5.45455 12.2727C5.45455 12.5239 5.25114 12.7273 5 12.7273Z'
                                        fill='black'
                                    />
                                </svg>
                            </div>
                            <h4>Blood Glucose</h4>
                        </div>
                        <div className='health-statistic'>
                            {clientData &&
                            clientData[props.checkinList.length - 1] ? (
                                <h3>
                                    {
                                        <MetricDisplay
                                            metricData={
                                                clientData[
                                                    props.checkinList.length - 1
                                                ]
                                            }
                                            metricScale='mg/dl'
                                            filter='Most recent blood glucose level?'
                                        />
                                    }
                                </h3>
                            ) : (
                                <h3>N/A</h3>
                            )}
                        </div>
                        <button
                            className='metric-button'
                            onClick={() =>
                                handleClick('Blood Glucose Level', 'mg/dl')
                            }
                        >
                            See history
                        </button>
                    </div>
                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <svg
                                    width='14'
                                    height='14'
                                    viewBox='0 0 14 14'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M12.25 1.75H11.5396C11.9886 2.52328 12.25 3.41824 12.25 4.375C12.25 7.26988 9.89488 9.625 7 9.625C4.10512 9.625 1.75 7.26988 1.75 4.375C1.75 3.41824 2.01141 2.52328 2.46039 1.75H1.75C0.785039 1.75 0 2.53504 0 3.5V12.25C0 13.215 0.785039 14 1.75 14H12.25C13.215 14 14 13.215 14 12.25V3.5C14 2.53504 13.215 1.75 12.25 1.75ZM7 8.75C9.41637 8.75 11.375 6.79137 11.375 4.375C11.375 1.95863 9.41637 0 7 0C4.58363 0 2.625 1.95863 2.625 4.375C2.625 6.79137 4.58363 8.75 7 8.75ZM6.9918 4.59539L7.91 2.45273C8.0057 2.22934 8.26383 2.1268 8.48504 2.22277C8.70707 2.31793 8.80988 2.57523 8.715 2.79699L7.79434 4.94484C7.97699 5.14062 8.09375 5.39902 8.09375 5.6875C8.09375 6.29152 7.60402 6.78125 7 6.78125C6.39598 6.78125 5.90625 6.29152 5.90625 5.6875C5.90625 5.08648 6.39187 4.60004 6.9918 4.59539Z'
                                        fill='black'
                                    />
                                </svg>
                            </div>
                            <h4>Weight</h4>
                        </div>
                        <div className='health-statistic'>
                            {clientData &&
                            clientData[props.checkinList.length - 1] ? (
                                <h3>
                                    {
                                        <MetricDisplay
                                            metricData={
                                                clientData[
                                                    props.checkinList.length - 1
                                                ]
                                            }
                                            metricScale='Ibs'
                                            filter='Most recent weight? (pounds)'
                                        />
                                    }
                                </h3>
                            ) : (
                                <h3>N/A</h3>
                            )}
                        </div>
                        <button className='metric-button'>See history</button>
                    </div>
                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <svg
                                    width='15'
                                    height='15'
                                    viewBox='0 0 15 15'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M13.0986 3.28043C12.0967 3.29508 11.2734 4.11246 11.2529 5.11442C11.2383 5.82633 11.6191 6.45035 12.1904 6.77848V10.0773C12.1904 11.756 10.7197 13.1242 8.90918 13.1242C7.15137 13.1242 5.70996 11.8322 5.63086 10.2179C7.76367 9.77848 9.375 7.8859 9.375 5.62418V1.07145C9.375 0.737463 9.1377 0.447424 8.80957 0.38297L6.9668 0.0138298C6.58594 -0.062342 6.2168 0.183752 6.14062 0.564611L6.04688 1.02457C5.9707 1.40543 6.2168 1.77457 6.59766 1.85074L7.49707 2.02946V5.5861C7.49707 7.1359 6.26074 8.4191 4.71094 8.43375C3.14648 8.4484 1.87207 7.18278 1.87207 5.62125V2.03238L2.77148 1.85367C3.15234 1.7775 3.39844 1.40836 3.32227 1.0275L3.23145 0.567541C3.15527 0.186681 2.78613 -0.0594123 2.40527 0.0167595L0.56543 0.380041C0.237305 0.447424 0 0.734533 0 1.07145V5.62418C0 7.88883 1.61426 9.78434 3.75293 10.2179C3.8291 12.8664 6.11133 14.9992 8.90625 14.9992C11.748 14.9992 14.0625 12.7902 14.0625 10.0773V6.77848C14.6221 6.45328 15 5.84977 15 5.15543C15 4.10953 14.1445 3.26578 13.0986 3.28043ZM13.125 5.62418C12.8672 5.62418 12.6562 5.41324 12.6562 5.15543C12.6562 4.89762 12.8672 4.68668 13.125 4.68668C13.3828 4.68668 13.5938 4.89762 13.5938 5.15543C13.5938 5.41324 13.3828 5.62418 13.125 5.62418Z'
                                        fill='black'
                                    />
                                </svg>
                            </div>
                            <h4>Blood Pressure</h4>
                        </div>
                        <div className='health-statistic'>
                            {clientData &&
                            clientData[props.checkinList.length - 1] ? (
                                <h3>
                                    {
                                        <MetricDisplay
                                            metricData={
                                                clientData[
                                                    props.checkinList.length - 1
                                                ]
                                            }
                                            metricScale='mmHg'
                                            filter='Most recent blood pressure?'
                                        />
                                    }
                                </h3>
                            ) : (
                                <h3>N/A</h3>
                            )}
                        </div>
                        <button className='metric-button'>See history</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default HealthMetric;
