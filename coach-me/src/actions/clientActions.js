import axios from 'axios';
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
    Authorization: sessionStorage.getItem('token')
};

export const getClientInfo = props => dispatch => {
    console.log(props);
    const clientnum = { clientPhone: props.num };
    dispatch({ type: GET_CLIENTS_START });
    axios
        .post(
            ` https://coach-me-backend.herokuapp.com/clientRoute/login`,
            clientnum
        )
        .then(res => {
            // console.log('res.data', res.data.loginAttempts);
            sessionStorage.setItem('token', res.data.token);
            localStorage.setItem('loginAttempts', res.data.loginAttempts);
            const loginAttempts = localStorage.getItem('loginAttempts');
            // console.log('Look at all this info!', loginAttempts);

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err
            });
        });
};

export const addMetric = metricUpdate => dispatch => {
    dispatch({ type: UPDATE_METRIC_START });
    axios
        .post(
            `https://coach-me-backend.herokuapp.com/clientRoute/logMetrics `,
            metricUpdate,
            { headers: headers }
        )
        .then(res => {
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
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(
            `https://coach-me-backend.herokuapp.com/clientRoute/paginationGetMetrics`,
            {
                headers: {
                    Authorization: sessionStorage.getItem('token')
                }
            }
        )
        .then(results => {
            const clientRecords = [...results.data.clientRecords];
            console.log('client records', clientRecords);
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
