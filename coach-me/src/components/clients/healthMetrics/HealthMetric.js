import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './healthMetrics.scss';

const HealthMetric = props => {
    const [clientData, setClientData] = useState([]);

    useEffect(() => {
        for (let i = 0; i < props.checkinList.length; i++) {
            // console.log(props.checkinList[i]);
            axios
                .get(
                    `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/?filterByFormula=OR({Most recent blood pressure?}!='',{Most recent weight? (pounds)}!='',{Most recent blood glucose level?}!='')&api_key=keyfahybUIpBkegFv`
                )
                .then(results => {
                    for (let j = 0; j < results.data.records.length; j++) {
                        // console.log(results.records[j]);
                        if (
                            results.data.records[j].id === props.checkinList[i]
                        ) {
                            // console.log(
                            //     'found some records',
                            //     results.data.records[j]
                            // );
                            setClientData(previous => {
                                return [...previous, results.data.records[j]];
                            });
                        }
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [props.checkinList]);

    return (
        <div>
            <h1>Metrics</h1>
            {console.log(clientData)}
        </div>
    );
};

export default HealthMetric;
