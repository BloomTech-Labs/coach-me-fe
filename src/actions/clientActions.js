import axios from 'axios';
import toastr from 'toastr';
import apiCall from '../components/utils/api';
import axiosWithCred from '../components/utils/axiosWithCred';
import {
    GET_CLIENTS_SUCCESS,
    EMAIL_REQUEST_SUCCESS,
    PASSWORD_RESET_SUCCESS,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE
} from './types';

export const getClientInfoRegister = props => dispatch => {
    apiCall()
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
        )
        .then(() => {
            props.history.push('/dashboard-client');
        })
        .catch(() => {
            toastr.error('There was an error.');
        });
};

export const getClientInfoLogin = props => dispatch => {
    apiCall()
        .post(
            `/auth/login?user_type=client`,
            {
                email: props.input.email, 
                password: props.input.password
            }
        )
        .then(() => {
            props.history.push('/dashboard-client');
        })
        .catch(() => {
            toastr.error('There was an error.');
        });
};

export const sendEmail = ({cred_value, method}) => dispatch => {
    console.log(method, cred_value)
    axiosWithCred
        .post(`/auth/forgot_password?user_type=client`,
        {method, cred_value})
        .then(() => {
            
        })
        .catch(() => {
            toastr.error('There was an error.');
        });
};

export const getNewPassword = ({newPassword, repPassword, token}) => dispatch => {
    console.log(newPassword, repPassword)
    apiCall()
        .post(`/auth/forgot_password/password_recovery?token=${token}`,
        {password: newPassword})
        .then(() => {

        })
        .catch(() => {
            toastr.error('There was an error.');
        });
};


export const getClientInfo = (id) => dispatch => {

    axiosWithCred
        .get(`/api/client/me`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_CLIENTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            toastr.error('There was an error.');
        });
}

//legacy
export const addMetric = metricUpdate => dispatch => {
    dispatch({ type: UPDATE_METRIC_START });
    axiosWithCred
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
    axiosWithCred
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