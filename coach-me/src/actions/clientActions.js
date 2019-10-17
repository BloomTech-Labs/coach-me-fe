import axios from 'axios';

//clientActions

import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE
} from './types';

const headers = { 'Content-Type': 'application/json' };

//`https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${match.params.clientid}?api_key=keyfahybUIpBkegFv`

export const getClientInfo = props => dispatch => {
    dispatch({ type: GET_CLIENTS_START });
    axios
        .get(
            `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${props.match.params.clientid}?api_key=keyfahybUIpBkegFv`
        )
        .then(res => {
            console.log('actions', res.data);
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};

export const updateMetric = (id, metricUpdate) => dispatch => {
    // debugger;
    console.log('hello', metricUpdate);
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

export const getClientRecords = clientId => dispatch => {
    console.log('hello from getClientRecord reducer');
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(
            `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Outcomes/?filterByFormula=OR({Blood_sugar}!='',{Weight}!='',{Blood_pressure_over}!='')&api_key=keyk1YJknNeEUJ4Pf`
        )
        .then(results => {
            const clientRecords = [];
            for (let j = 0; j < results.data.records.length; j++) {
                if (
                    results.data.records[j].fields.Client_Name[0] === clientId
                ) {
                    clientRecords.push(results.data.records[j]);
                }
            }
            console.log('before dispatch', clientRecords);

            dispatch({
                type: GET_RECORDS_SUCCESS,
                payload: clientRecords
            });
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};
