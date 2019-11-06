import React from 'react';

//Component Imports
import HealthMetric from '../healthMetrics/HealthMetric';

// Styling
import './clientDashboard.scss';

const ClientDashboard = () => {
    return (
        <div className='client-dashboard'>
            <HealthMetric />
        </div>
    );
};

export default ClientDashboard;
