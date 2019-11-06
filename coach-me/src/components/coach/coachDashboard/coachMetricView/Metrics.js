import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getClientMetrics } from '../../../../actions/coachActions';
import LineGraph from '../../../clients/healthMetrics/LineGraph';

import './metrics.scss';
import iconfastingBloodGlucose from '../../../utils/assets/Blood.svg';
import iconbloodPressure from '../../../utils/assets/bloodPressure.svg';
import iconweight from '../../../utils/assets/weight.svg';

function Metrics(props) {
    const { clientprofile } = props;
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    const clientData = [...state.clientMetrics];

    clientData.sort((a, b) => {
        return Date.parse(a.date) - Date.parse(b.date);
    });

    console.log('FROM METRICS', clientprofile);

    useEffect(() => {
        if (clientprofile && clientprofile.clientId) {
            dispatch(getClientMetrics(clientprofile.clientId));
        }
        // eslint-disable-next-line
    }, [clientprofile]);

    // const handleClick = () => {
    //     // props.setToggleHistory(false);
    //     // props.history.push('/metrics');
    // };

    //Data reshaped for chartjs used in <LineGraph />
    const datesArray = clientData.map(date => {
        return moment(date.date).format('MMM Do');
    });
    const bloodSugarArray = clientData.map(value => {
        return value.Blood_sugar;
    });
    const weightArray = clientData.map(value => {
        return value.Weight;
    });
    const bpOverArray = clientData.map(value => {
        return value.Blood_pressure_over;
    });
    const bpUnderArray = clientData.map(value => {
        return value.Blood_pressure_under;
    });
    const reverseClientData = [...clientData];
    reverseClientData.reverse();

    return (
        <>
            <div className='dash-metric-container'>
                <div className='graph-container'>
                    <h2>Blood Glucose</h2>
                    {bloodSugarArray.length !== 0 ? (
                        <LineGraph
                            values={bloodSugarArray}
                            datesArray={datesArray}
                            metricType={'bloodGlucose'}
                        />
                    ) : (
                        <p>No available data for this metric.</p>
                    )}
                </div>

                <div className='health-cards-container'>
                    <h3>Blood Glucose History</h3>
                    {reverseClientData.map((record, i) =>
                        record['Blood_sugar'] ? (
                            <div className='health-card'>
                                <div className='metric-icon' key={i}>
                                    <img
                                        className='icon'
                                        alt='Blood Gluscose Icon'
                                        src={iconfastingBloodGlucose}
                                    ></img>
                                </div>
                                <div className='health-label'>
                                    <div className='label-container'>
                                        <h3>Blood Glucose</h3>
                                    </div>
                                    <h4>
                                        {moment(record.date).format(
                                            'MMM Do YYYY'
                                        )}
                                    </h4>
                                </div>
                                <div className='health-metric-value'>
                                    <h4 className='health-value'>
                                        {record['Blood_sugar']
                                            ? record['Blood_sugar']
                                            : 'Not Recorded'}
                                    </h4>
                                    <h4 className='health-scale'>mg/dl</h4>
                                </div>
                            </div>
                        ) : null
                    )}
                </div>
            </div>

            <div className='dash-metric-container'>
                <div className='graph-container'>
                    <h2>Weight</h2>

                    <LineGraph
                        values={weightArray}
                        datesArray={datesArray}
                        metricType={'weight'}
                    />
                </div>

                <div className='health-cards-container'>
                    <h3>Weight History</h3>
                    {reverseClientData.map((record, i) => (
                        <div className='health-card'>
                            <div className='metric-icon' key={i}>
                                <img
                                    className='icon'
                                    alt='Weight Icon'
                                    src={iconweight}
                                ></img>
                            </div>
                            <div className='health-label'>
                                <div className='label-container'>
                                    <h3>Weight</h3>
                                </div>
                                <h4>
                                    {moment(record.date).format('MMM Do YYYY')}
                                </h4>
                            </div>
                            <div className='health-metric-value'>
                                <h4 className='health-value'>
                                    {record['Weight']
                                        ? record['Weight']
                                        : 'N/A'}
                                </h4>
                                <h4 className='health-scale'>lbs</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='dash-metric-container'>
                <div className='graph-container'>
                    <h2>Blood Pressure</h2>
                    <LineGraph
                        bpOverArray={bpOverArray}
                        bpUnderArray={bpUnderArray}
                        datesArray={datesArray}
                        metricType={'bloodPressure'}
                    />
                </div>
                <div className='health-cards-container'>
                    <h3>Blood Pressure History</h3>
                    {reverseClientData.map((record, i) => (
                        <div className='health-card'>
                            <div className='metric-icon' key={i}>
                                <img
                                    className='icon'
                                    alt='Blood Pressure Icon'
                                    src={iconbloodPressure}
                                ></img>
                            </div>
                            <div className='health-label'>
                                <div className='label-container'>
                                    <h3>Blood Pressure</h3>
                                </div>
                                <h4>
                                    {moment(record.date).format('MMM Do YYYY')}
                                </h4>
                            </div>
                            <div className='health-metric-value'>
                                <h4 className='health-value'>
                                    {record['Blood_pressure_over']
                                        ? record['Blood_pressure_over'] +
                                          '/' +
                                          record['Blood_pressure_under']
                                        : 'N/A'}
                                </h4>
                                <h4 className='health-scale'>mg/dl</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Metrics;
