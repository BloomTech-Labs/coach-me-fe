import React, { useEffect } from 'react';
import Notifications from './Notifications';
import ResourceCenter from './ResourceCenter';
import SessionNotes from './SessionNotes';
import HealthMetric from '../healthMetrics/HealthMetric';
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { getClientInfo } from '../../../actions/clientActions'; 
import './clientDashboard.scss';

const ClientDashboard = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientInfo(props.object.id))
      }, []);
      
    return (
        <div className='client-dashboard'>
            <div className="profile-container">
                {`Welcome ${props.object.first_name}!`}
            </div>
            <Notifications />
            <ResourceCenter />
            <SessionNotes />
            <HealthMetric />
        </div>
    );
};

const mapStateToProps = state => {
    console.log("in mapStateToProps", state.client.clientinfo)
    return {
        object: {
            id: state.client.clientinfo.id,
            first_name: state.client.clientinfo.first_name,
            last_name: state.client.clientinfo.last_name,
            email: state.client.clientinfo.email,
            phone: state.client.clientinfo.phone,
            dob: state.client.clientinfo.dob,
            password: state.client.clientinfo.password,
            confirm_password: state.client.clientinfo.confirm_password,
            height: state.client.clientinfo.height,
            sex: state.client.clientinfo.sex,
            gender: state.client.clientinfo.gender
        }
    }
  }
  
  export default connect(mapStateToProps, {getClientInfo})(ClientDashboard);