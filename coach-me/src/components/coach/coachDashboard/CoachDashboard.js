import React, { useState, useEffect } from 'react';
import './coachDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../../actions/authActions';
import CoachHeader from './CoachHeader';
import ClientInfo from './clientsList/ClientInfo/ClientInfo';
import SearchForm from './SearchForm';
import CoachMessaging from './coachMessaging/CoachMessaging';
import Metrics from './coachMetricView/Metrics';
import GoalsDisplay from './goals/GoalsDisplay';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const CoachDashboard = ({ history }) => {
    const [clientprofile, setclientprofile] = useState();
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    useEffect(() => {
        // Gt request to airtable endpoint with api key appended to the end of url

        if (token) {
            dispatch(getClients(token));
        }
        // eslint-disable-next-line
    }, [token]);

    //This sets the default patient as the first in the list for the initial load.
    useEffect(() => {
        setclientprofile(state.clientRecords[0]);
    }, [state.clientRecords]);

    const setClient = clientID => {
        state.clientRecords.filter(client => {
            if (clientID === client.clientId) {
                setclientprofile(client);
            }
        });
    };

    return (
        <>
            <CoachHeader />
            <div className='coachdashboard-container'>
                <div className='clientlist-container'>
                    <PerfectScrollbar>
                        <SearchForm setClient={setClient} />
                    </PerfectScrollbar>
                </div>
                <div className='clientinfo-container'>
                    <ClientInfo clientprofile={clientprofile} />
                    <GoalsDisplay clientprofile={clientprofile} />
                    <Metrics clientprofile={clientprofile} />
                </div>
                <div className='coach-messaging'>
                    <CoachMessaging clientprofile={clientprofile} />
                </div>
            </div>
        </>
    );
};

export default CoachDashboard;
