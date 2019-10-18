import React, { useState, useEffect } from 'react';
import axios from 'axios';

import HealthMetric from '../healthMetrics/HealthMetric';

import './clientDashboard.scss';

const ClientDashboard = () => {
    const [userId, setUserId] = useState('recZNs8pQo2rSsw0T');
    const [checkinList, setCheckinList] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master/${userId}?api_key=keyk1YJknNeEUJ4Pf`
                // `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master?api_key=keyfahybUIpBkegFv`
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
        <div className='client-dashboard'>
            <HealthMetric checkinList={checkinList} userId={userId} />
        </div>
    );
};

export default ClientDashboard;
