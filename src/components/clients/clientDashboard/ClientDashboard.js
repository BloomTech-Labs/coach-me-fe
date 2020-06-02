import React, { useEffect } from 'react';
import Notifications from './Notifications';
import ResourceCenter from './ResourceCenter';
import SessionNotes from './SessionNotes';
import HealthMetric from '../healthMetrics/HealthMetric';
import { useDispatch,useSelector } from "react-redux";
import { connect } from 'react-redux';
import { getClientInfo } from '../../../actions/clientActions'; 
import './clientDashboard.scss';

const ClientDashboard = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientInfo())
      }, []);
      const state = useSelector(state => state.client);
      
    return (
        <div className='client-dashboard'>
            <div className="profile-container">
                {console.log(props.state.email)}
                { <h4>Welcome {props.state.email}</h4> }
            </div>
            <Notifications />
            <ResourceCenter />
            <SessionNotes />
            <HealthMetric />
        </div>
    );
};

const mapStateToProps = state => {
    console.log("in mapStateToProps", state.client.client_data)
    return {
        state: state.client.client_data
        }
    }
  
  
  export default connect(mapStateToProps)(ClientDashboard);