import React, { useState, useEffect } from 'react';
import './coachDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../../actions/authActions';
import CoachHeader from './CoachHeader';
import ClientInfo from './clientsList/ClientInfo/ClientInfo';
import SearchForm from './SearchForm';
import CoachMessaging from './coachMessaging/CoachMessaging';

const CoachDashboard = ({ history }) => {
    const [users, setUsers] = useState();

    const [number, setNumber] = useState();
    const [verifyNumber, setVerifyNumber] = useState('');
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
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

    // const handleInput = e => {
    //     setNumber(e.target.value);
    // };

    // const handleInputTwo = e => {
    //     setVerifyNumber(e.target.value);
    // };

    // const handleCheckOne = () => {
    //     setCheckOne(true);
    // };

    // const handleCheckTwo = () => {
    //     setCheckTwo(true);
    // };

    // const handleCheckThree = () => {
    //     history.push('/clients');
    // };
    const setClient = clientID => {
        console.log(clientID);
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
                    <SearchForm setClient={setClient} />
                </div>
                <div className='clientinfo-container'>
                    <ClientInfo clientprofile={clientprofile} />
                </div>
                <div className='coach-messaging'>
                    <CoachMessaging />
                </div>
            </div>
        </>
    );
};

export default CoachDashboard;
