import React from 'react';
import Notifications from './Notifications';
import ResourceCenter from './ResourceCenter';
import SessionNotes from './SessionNotes';
import HealthMetric from '../healthMetrics/HealthMetric';
import { connect } from 'react-redux';
import './clientDashboard.scss';

const ClientDashboard = (props) => {
    console.log(props)
    return (
        <div className='client-dashboard'>
            <Notifications first_name={props.object.first_name}/>
            <ResourceCenter />
            <SessionNotes />
            <HealthMetric />
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state.client.clientinfo)
    return {
        object : {
        first_name: state.client.clientinfo.first_name,
        last_name: state.client.clientinfo.last_name,
        email: state.client.clientinfo.email,
        phone: state.client.clientinfo.phone,
        dob: state.client.clientinfo.dob,
        password: state.client.clientinfo.password,
        confirm_password: state.client.clientinfo.confirm_password,
        height: state.client.clientinfo.height,
        sex: state.client.clientinfo.sex,
        gender: state.client.clientinfo.gender,
        }
    }
  }
  
  export default connect(mapStateToProps)(ClientDashboard);