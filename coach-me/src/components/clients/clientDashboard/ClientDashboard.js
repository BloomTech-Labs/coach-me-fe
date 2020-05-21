import React from 'react';
import Notifications from './Notifications';
import HealthMetrics from '../healthMetrics/HealthMetric';
import './clientDashboard.scss';

const ClientDashboard = (props) => {
    console.log('props',props)
    return (
        <div className='client-dashboard'>
            <div className='top-section'>
                <Notifications />
            </div>
            <div>
                <HealthMetrics />
            </div>
           
        </div>
    );
};

export default ClientDashboard;
