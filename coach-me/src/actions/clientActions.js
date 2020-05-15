import axios from 'axios';
import {
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    EMAIL_REQUEST_SUCCESS,
    EMAIL_REQUEST_FAILURE,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,

    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE
} from './types';

//Register endpoint for client

//updated the data needed to align with the new back-end. 04/05/2020
export const getClientInfoRegister = props => dispatch => {
    console.log(props,";")
    console.log(props.userAccountDetails)
    axios
        .post(
            `http://localhost:5000/api/auth/register?user_type=client`, 
            props.userAccountDetails
        )
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields //need to change
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.response
            });
        });
};

//Login endpoint for client
export const getClientInfoLogin = props => dispatch => {
    console.log(props,";")
    console.log(props.userAccountDetails)
    axios
        .post(
            `http://localhost:5000/api/auth/login?user_type=client`,
            props.userAccountDetails
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject.fields //need to change
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.response
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
    axios
        .post(`http://localhost:5000/api/auth/forgot_password/method=phone?user_type=client?`,
        props.userAccountDetails)
        //method, user type, cred value
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: EMAIL_REQUEST_SUCCESS,
                // payload:
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
    axios
        .post(`http://localhost:5000/api/auth`, )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: PASSWORD_RESET_SUCCESS,
                // payload:
            });
        })
        .catch(err => {
            dispatch({
                type: PASSWORD_RESET_FAILURE,
                payload: err.message
            });
        });
};
