//clientActions

import {
    GET_CLIENTS,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE
} from './types';
import axios from 'axios';
const headers = { 'Content-Type': 'application/json' };
export const updateMetric = (id, metricUpdate) => dispatch => {
    // debugger;
    console.log('hello',metricUpdate)
    dispatch({ type: UPDATE_METRIC_START });
    axios

        .patch(
            `https://api.airtable.com/v0/appgqiRyvVDHlPI0u/Check-ins?api_key=keyfahybUIpBkegFv`,
            metricUpdate,
            { headers: headers }
        )
        .then(res => {
            console.log('UPDATED METRIC', res);
            dispatch({
                type: UPDATE_METRIC_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_METRIC_FAILURE,
                payload: err.message
            });
        });
};
