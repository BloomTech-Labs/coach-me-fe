import React from 'react';
import Notifications from './Notifications';
import ResourceCenter from './ResourceCenter';
import SessionNotes from './SessionNotes';
import HealthMetric from '../healthMetrics/HealthMetric';
import './clientDashboard.scss';

const ClientDashboard = () => {
    return (
        <div className='client-dashboard'>
            <Notifications />
            <ResourceCenter />
            <SessionNotes />
            <HealthMetric />
        </div>
    );
};

export default ClientDashboard;
