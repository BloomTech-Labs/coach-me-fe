import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HealthMetric from '../healthMetrics/HealthMetric';

import './clientDashboard.scss';

const ClientDashboard = () => {
    const [userId, setUserId] = useState('recYrQGcD4LSJmPjk');
    const [checkinList, setCheckinList] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master/${userId}?api_key=keyfahybUIpBkegFv`
            )
            .then(results => {
                console.log('from master table', results.data);
                setCheckinList(results.data.fields['weekly check-ins 2']);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2>Welcome to client dashboard</h2>
            <HealthMetric checkinList={checkinList} userId={userId} />
        </div>
    );
};

export default ClientDashboard;
