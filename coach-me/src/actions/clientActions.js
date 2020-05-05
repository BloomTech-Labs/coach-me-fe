import axios from 'axios';
import {
    GET_CLIENTS_START,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE,
    EMAIL_REQUEST_START,
    EMAIL_REQUEST_SUCCESS,
    EMAIL_REQUEST_FAILURE,
    PASSWORD_RESET_START,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
} from './types';

//Register endpoint for client 
export const getClientInfoRegister = props => dispatch => {
    const clientInfo = { email: props.input.email, password: props.input.password };//trey
    dispatch({ type: GET_CLIENTS_START });
    axios
        .post(
            `${process.env.REACT_APP_BACK_END_URL}/clientRoute/login`,
            clientInfo//trey
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('loginAttempts', res.data.loginAttempts);
            const loginAttempts = localStorage.getItem('loginAttempts');
            if (loginAttempts == 1) {
                props.history.push('/welcome');
            } else {
                props.history.push('/metrics'); 
            }

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

//Login endpoint for client 
export const getClientInfoLogin = props => dispatch => {//trey | change name
    const clientInfo = { email: props.input.email, password: props.input.password };//trey
    dispatch({ type: GET_CLIENTS_START });

    axios
        .post(
            `${process.env.REACT_APP_BACK_END_URL}/clientRoute/login`,
            clientInfo//trey
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/metric-form'); //trey | user-dashboard

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
            `${process.env.REACT_APP_BACK_END_URL}/clientRoute/logMetrics `,
            metricUpdate,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token')
                }
            }
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

export const getClientRecords = () => dispatch => {
    dispatch({ type: GET_METRICS_START });
    axios
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/clientRoute/paginationGetMetrics`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            const clientRecords = [...results.data.clientRecords];
            dispatch({
                type: GET_METRICS_SUCCESS,
                payload: clientRecords
            });
        })
        .catch(err => {
            dispatch({
                type: GET_METRICS_FAILURE,
                payload: err.message
            });
        });
};

//trey
export const getEmail = props => dispatch => {
    const userEmail = { email: props.input.email };
    dispatch({ type: EMAIL_REQUEST_START });
    axios
        .post(
            `path to route for user email to reset`,
            userEmail
        )
        .then(results => {
            const clientEmail = [...results.data.email];
            dispatch({
                type: EMAIL_REQUEST_SUCCESS,
                payload: clientEmail
            });
        })
        .catch(err => {
            dispatch({
                type: EMAIL_REQUEST_FAILURE,
                payload: err.message
            });
        });
};

export const getNewPassword = props => dispatch => {
    const userPassword = { password: props.input.password };
    dispatch({ type: PASSWORD_RESET_START });
    axios
        .post(
            `path to route for new password`,
            userPassword
        )
        .then(results => {
            const clientPassword = [...results.data.clientPassword];
            dispatch({
                type: PASSWORD_RESET_SUCCESS,
                payload: clientPassword
            });
        })
        .catch(err => {
            dispatch({
                type: PASSWORD_RESET_FAILURE,
                payload: err.message
            });
        });
};