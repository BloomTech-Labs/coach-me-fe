import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HealthMetric from '../healthMetrics/HealthMetric';

import './clientDashboard.scss';

const ClientDashboard = () => {
    const [userId, setUserId] = useState('recZNs8pQo2rSsw0T');
    const [checkinList, setCheckinList] = useState([]);

    return (
        <div className='client-dashboard'>
            <HealthMetric checkinList={checkinList} userId={userId} />
        </div>
    );
};

export default ClientDashboard;
