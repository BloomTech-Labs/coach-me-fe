import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { translate } from '../../utils/language/translate';

import { getClientRecords } from '../../../actions/clientActions';

import MetricDisplay from './MetricDisplay';
import HealthMetricCards from './HealthMetricCards';
import LineGraph from './LineGraph';

import './healthMetrics.scss';
import iconfastingBloodGlucose from '../../utils/assets/Blood.svg';
import iconbloodPressure from '../../utils/assets/bloodPressure.svg';
import iconweight from '../../utils/assets/weight.svg';
import iconSeeHistory from '../../utils/assets/seeHistory.svg';

const HealthMetric = props => {
    const state = useSelector(state => state.client);
    const dispatch = useDispatch();
    const clientData = [...state.clientMetrics];

    clientData.sort((a, b) => {
        return Date.parse(a.fields.Date_time) - Date.parse(b.fields.Date_time);
    });

    // console.log('clientData***', clientData);
    // console.log('****STATE', state.clientinfo);
    // Following state controls the history toggle functionality:
    const [toggleHistory, setToggleHistory] = useState(false);

    // used to convert the labels and heading of the HealthMetricCard component into either one of the three metrics.
    const [historyLabel, setHistoryLabel] = useState('');
    const [historyScale, setHistoryScale] = useState('');
    const [historyFilter, setHistoryFilter] = useState('');

    //'recZNs8pQo2rSsw0T'
    useEffect(() => {
        dispatch(getClientRecords());
    }, []);

    const handleClick = (heading, label, filter, filter2) => {
        window.scrollTo(0, 0);
        setHistoryFilter('');
        setToggleHistory(true);
        setHistoryLabel(heading);
        setHistoryScale(label);
        if (filter2) {
            setHistoryFilter([filter, filter2]);
        } else {
            setHistoryFilter(filter);
        }
        props.history.push('/metrics/history');
        // console.log('***Typeof', typeof historyFilter);
    };

    //Data reshaped for chartjs used in <LineGraph />

    const datesArray = clientData.map(date => {
        return moment(date.fields.Date_time).format('MMM Do');
    });
    const bloodSugarArray = clientData.map(value => {
        return value.fields.Blood_sugar;
    });
    const weightArray = clientData.map(value => {
        return value.fields.Weight;
    });
    const bpOverArray = clientData.map(value => {
        return value.fields.Blood_pressure_over;
    });
    const bpUnderArray = clientData.map(value => {
        return value.fields.Blood_pressure_under;
    });

    return (
        <>
            <Route
                path='/metrics/history'
                render={props => (
                    <HealthMetricCards
                        {...props}
                        historyLabel={historyLabel}
                        historyScale={historyScale}
                        historyFilter={historyFilter}
                        setToggleHistory={setToggleHistory}
                        clientData={clientData}
                    />
                )}
            />

            <div className='metric-container'>
                <div className='metric-header'>
                    <h3>{translate('hello')}</h3>
                    <h2>{state.clientinfo.name}!</h2>
                </div>
                <div className='metric-values'>
                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <img
                                    className='icon'
                                    alt='Blood Gluscose Icon'
                                    src={iconfastingBloodGlucose}
                                ></img>
                            </div>
                            <h4>{translate('bloodGlucose')}</h4>
                        </div>
                        {/* <div className="health-statistic">
              {clientData && clientData[clientData.length - 1] ? (
                <h3>
                  {
                    <MetricDisplay
                      metricData={clientData[clientData.length - 1]}
                      metricScale="mg/dl"
                      filter="Blood_sugar"
                    />
                  }
                </h3>
              ) : (
                <h3>N/A</h3>
              )}
            </div> */}
                        <LineGraph
                            values={bloodSugarArray}
                            datesArray={datesArray}
                            metricType={'bloodGlucose'}
                        />
                        <div className='btn-container'>
                            <button
                                className='metric-button'
                                onClick={() =>
                                    handleClick(
                                        'Blood Glucose',
                                        'mg/dl',
                                        'Blood_sugar'
                                    )
                                }
                            >
                                {translate('seeHistory')}{' '}
                                <img
                                    className='icon'
                                    alt='Arrow pointing right'
                                    src={iconSeeHistory}
                                ></img>
                            </button>
                        </div>
                    </div>

                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <img
                                    className='icon'
                                    alt='Weight Icon'
                                    src={iconweight}
                                ></img>
                            </div>
                            <h4>{translate('weight')}</h4>
                        </div>
                        {/* <div className="health-statistic">
              {clientData && clientData[clientData.length - 1] ? (
                <h3>
                  {
                    <MetricDisplay
                      metricData={clientData[clientData.length - 1]}
                      metricScale="Ibs"
                      filter="Weight"
                    />
                  }
                </h3>
              ) : (
                <h3>N/A</h3>
              )}
            </div> */}
                        <LineGraph
                            values={weightArray}
                            datesArray={datesArray}
                            metricType={'weight'}
                        />
                        <div className='btn-container'>
                            <button
                                className='metric-button'
                                onClick={() =>
                                    handleClick('Weight', 'Ibs', 'Weight')
                                }
                            >
                                {translate('seeHistory')}{' '}
                                <img
                                    className='icon'
                                    alt='Arrow pointing right'
                                    src={iconSeeHistory}
                                ></img>
                            </button>
                        </div>
                    </div>
                    <div className='health-value'>
                        <div className='metric'>
                            <div className='metric-icon'>
                                <img
                                    className='icon'
                                    alt='Blood Pressure Icon'
                                    src={iconbloodPressure}
                                ></img>
                            </div>
                            <h4>{translate('bp')}</h4>
                        </div>
                        {/* <div className='health-statistic'>
                            {clientData && clientData[clientData.length - 1] ? (
                                <h3>
                                    {
                                        <MetricDisplay
                                            metricData={
                                                clientData[
                                                    clientData.length - 1
                                                ]
                                            }
                                            metricScale='mmHg'
                                            filter='Blood_pressure_under'
                                            filter2='Blood_pressure_over'
                                        />
                                    }
                                </h3>
                            ) : (
                                <h3>N/A</h3>
                            )}
                        </div> */}
                        <LineGraph
                            bpOverArray={bpOverArray}
                            bpUnderArray={bpUnderArray}
                            datesArray={datesArray}
                            metricType={'bloodPressure'}
                        />
                        <div className='btn-container'>
                            <button
                                className='metric-button'
                                onClick={() =>
                                    handleClick(
                                        'Blood Pressure',
                                        'mmHg',
                                        'Blood_pressure_under',
                                        'Blood_pressure_over'
                                    )
                                }
                            >
                                {translate('seeHistory')}{' '}
                                <img
                                    className='icon'
                                    alt='Arrow pointing right'
                                    src={iconSeeHistory}
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HealthMetric;
