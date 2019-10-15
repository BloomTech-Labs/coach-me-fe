import React, { useState, useEffect } from 'react';

import HealthMetric from '../healthMetrics/HealthMetric';

import './clientDashboard.scss';

const ClientDashboard = () => {
    const [userId, setUserId] = useState('recAY9lIrdsr2rDYT');

    return (
        <div>
            <h2>Welcome to client dashboard</h2>
            <HealthMetric userId={userId} />
        </div>
    );
};

export default ClientDashboard;
