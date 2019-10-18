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

const headers = {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
};

export const getClientInfo = num => dispatch => {
    const clientnum = { clientPhone: num };
    console.log(clientnum);
    dispatch({ type: GET_CLIENTS_START });
    axios
        .post(
            ` https://coach-me-backend.herokuapp.com/clientRoute/login`,
            clientnum
        )
        .then(res => {
            console.log('actions', res);
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};

export const addMetric = metricUpdate => dispatch => {
    // debugger;

    dispatch({ type: UPDATE_METRIC_START });
    axios
        .post(
            `https://coach-me-backend.herokuapp.com/clientRoute/logMetrics `,
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
        .get(`https://coach-me-backend.herokuapp.com/clientRoute/getMetrics`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(results => {
            console.log('before dispatch', results.data.clientRecords);
            const clientRecords = [...results.data.clientRecords];

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
