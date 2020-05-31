import axios from 'axios';
import toastr from 'toastr';
import withAxios from '../components/utils/api';

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

export const getClientInfoRegister = props => dispatch => {
    withAxios()
        .post(
            `/auth/register?user_type=client`, 
            {
                first_name: props.userAccountDetails.first_name,
                last_name: props.userAccountDetails.last_name,
                email: props.userAccountDetails.email,
                phone: props.userAccountDetails.phone,
                dob: props.userAccountDetails.dob,
                password:props.userAccountDetails.password,
                confirm_password: props.userAccountDetails.confirm_password,
                height: props.userAccountDetails.height,
                sex: props.userAccountDetails.sex,
                gender: props.userAccountDetails.gender
            },
            { withCredentials: true }
        )
        .then(() => {
            props.history.push('/dashboard-client');
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.response
            });
        });
};

export const getClientInfoLogin = props => dispatch => {
    withAxios()
        .post(
            `/auth/login?user_type=client`,
            {
                email: props.input.email, 
                password: props.input.password
            }, 
            { withCredentials: true }
        )
        .then(() => {
            props.history.push('/dashboard-client');
        })
        .catch(err => {
            toastr.error('There was an error.');
        });
};

export const sendEmail = ({cred_value, method}) => dispatch => {
    console.log(method, cred_value)
    withAxios()
        .post(`/auth/forgot_password?user_type=client`,
        {method, cred_value})
        .then(() => {

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
    withAxios()
        .post(`/auth/forgot_password/password_recovery?token=${token}`,
        {password: newPassword})
        .then(() => {

        })
        .catch(err => {
            dispatch({
                type: PASSWORD_RESET_FAILURE,
                payload: err.message
            });
        });
};


export const getClientInfo = (id) => dispatch => {

    withAxios()
        .get(`/api/client/me`, {withCredentials: true})
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENTS_FAILURE,
                payload: err.message
            });
        });
}

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