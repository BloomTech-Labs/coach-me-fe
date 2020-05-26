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

const baseUrl = axios.create('https://coach-me-be.herokuapp.com/api')

export const getClientInfoRegister = props => dispatch => {
    console.log(props)
    axios
        .post(
            `https://coach-me-be.herokuapp.com/api/auth/register?user_type=client`, 
            props.userAccountDetails
        )
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);

            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.response
            });
        });
};

export const getClientInfoLogin = props => dispatch => {
    console.log(props)
    axios
        .post(
            `https://coach-me-be.herokuapp.com/api/auth/login?user_type=client`,
            props.input
        )
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data.clientObject
            });
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.response
            });
        });
};

export const sendEmail = ({cred_value, method}) => dispatch => {
    console.log(method, cred_value)
    axios
        .post(`https://coach-me-be.herokuapp.com/api/auth/forgot_password?user_type=client`,
        {method, cred_value})
        .then(res => {
            dispatch({
                type: EMAIL_REQUEST_SUCCESS,
                payload: res.data.clientObject
            });
        })
        .catch(err => {
            dispatch({
                type: EMAIL_REQUEST_FAILURE,
                payload: err.message
            });
        });
};

export const getNewPassword = ({newPassword, repPassword, token}) => dispatch => {
    console.log(newPassword, repPassword)
    axios
        .post(`${baseUrl}auth/forgot_password/password_recovery?token=${token}`,
        {password: newPassword})
        .then(res => {
            dispatch({
                type: PASSWORD_RESET_SUCCESS,
                payload: res.data.clientObject
            });
        })
        .catch(err => {
            dispatch({
                type: PASSWORD_RESET_FAILURE,
                payload: err.message
            });
        });
};


//legacy
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