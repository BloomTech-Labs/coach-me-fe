import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './healthMetrics.scss';

const HealthMetric = props => {
    const [clientData, setClientData] = useState();

    console.log(props);

    // console.log(props.userId);

    // for (let i = 0; i < props.checkinList.length; i++) {
    //     console.log(props.checkinList[i]);
    // }

    const array = [1, 3, 4, 5, 6];

    useEffect(() => {
        for (let i = 0; i < props.checkinList.length; i++) {
            console.log(props.checkinList[i]);
            axios
                .get(
                    `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${props.checkinList[i]}?api_key=keyfahybUIpBkegFv`
                )
                .then(results => {
                    console.log(results.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [props.checkinList]);

    return (
        <div>
            <h1>Metrics</h1>
        </div>
    );
};

export default HealthMetric;
