import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './healthMetrics.scss';

const HealthMetric = props => {
    const [clientData, setClientData] = useState();

    console.log(props.userId);

    useEffect(() => {
        axios
            .get(
                `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${props.userId}?api_key=keyfahybUIpBkegFv`
            )
            .then(results => {
                console.log(results);
            })
            .catch(error => {
                console.log(error);
            });
    });
    return (
        <div>
            <h1>Metrics</h1>
        </div>
    );
};

export default HealthMetric;
