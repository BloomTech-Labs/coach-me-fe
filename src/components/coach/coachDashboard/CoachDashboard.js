import React, { useState, useEffect } from 'react';
import './coachDashboard.scss';
import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../../actions/authActions';
import { getLastCheckInTime } from '../../../actions/coachActions';
import CoachHeader from './CoachHeader';
import ClientInfo from './clientsList/ClientInfo/ClientInfo';
import SearchForm from './SearchForm';
import CoachMessaging from './coachMessaging/CoachMessaging';
import Metrics from './coachMetricView/Metrics';
import GoalsDisplay from './goals/GoalsDisplay';
import 'react-perfect-scrollbar/dist/css/styles.css';


const CoachDashboard = props => {
    const [clientprofile, setclientprofile] = useState();
    const [coachName, setCoachName] = useState({
        first: '',
        last: ''
    })
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    
    useEffect(() => {
            dispatch(getClients())
            // setCoachName({...coachName,first: localStorage.getItem('first_name'), last: localStorage.getItem('last_name')})
        
    }, []);
    console.log(props)
    return (
        <>
            
            <div className='coachdashboard-container'>
                

                <div className='clientlist-container'>
                    <SearchForm  />
                </div>
                <div className='clientinfo-container'>
                    <ClientInfo clientprofile={clientprofile} />
                     <h4 className='coach-name'>{props.state.first_name} {props.state.last_name}</h4>}
                    <GoalsDisplay 
                    coachName={coachName}
                    clientprofile={clientprofile} />
                    <Metrics clientprofile={clientprofile} />
                </div>
                <div className='coach-messaging'>
                    <CoachMessaging clientprofile={clientprofile} />
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => {
    return {
        state: state.coach.data
    }
}

export default connect(mapStateToProps)(CoachDashboard);
