import React, { useState, useEffect } from 'react';
import './coachDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../../actions/authActions';
import { getlastCheckin} from '../../../actions/coachActions';
import CoachHeader from './CoachHeader';
import ClientInfo from './clientsList/ClientInfo/ClientInfo';
import SearchForm from './SearchForm';
import CoachMessaging from './coachMessaging/CoachMessaging';
import Metrics from './coachMetricView/Metrics';

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
    }, [token]);

    const setClient = clientID => {

        state.clientRecords.filter(client => {
            if (clientID === client.clientId) {
                const date = getlastCheckin(client.clientId)
                setclientprofile({...client, lastCheckin: date});
                
            }
        });
    };

    return (
        <>
            <CoachHeader />
            <div className='coachdashboard-container'>
                <div className='clientlist-container'>
                    <SearchForm setClient={setClient} />
                </div>
                <div className='clientinfo-container'>
                    <ClientInfo clientprofile={clientprofile} />
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
