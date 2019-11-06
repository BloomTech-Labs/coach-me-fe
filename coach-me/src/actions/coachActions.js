import axios from 'axios';
import {
    GET_TEXT_START,
    GET_TEXT_SUCCESS,
    ADD_TEXT_START,
    ADD_TEXT_SUCCESS,
    COACH_ERROR,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE,
    GET_CHECKIN,
    GET_GOALS
} from './types';

const headers = {
    Authorization: localStorage.getItem('token')
};

export const getMessageHistory = liveNumber => dispatch => {
    console.log('liiiive number', liveNumber);
    dispatch({ type: GET_TEXT_START });
    axios
        .get(
            `https://coach-me-development.herokuapp.com/twilioRoute/messagehistory/${liveNumber}`
        )
        .then(res => {
            console.log('getMessageHistory', res.data.message);
            dispatch({
                type: GET_TEXT_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(err => {
            console.log('getMessageHistory ERR', err);
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};

export const postMessage = post => dispatch => {
    console.log(post);
    dispatch({ type: ADD_TEXT_START });
    axios

        .post(
            `https://coach-me-development.herokuapp.com/twilioRoute/twilio`,
            post
        )

        .then(res => {
            dispatch({
                type: ADD_TEXT_SUCCESS
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};

export const getClients = token => dispatch => {
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(`${process.env.REACT_APP_BACK_END_URL}/coachRoute/getPatients`, {
            headers: headers
        })
        .then(res => {
            console.log('coach actions', res.data);

            dispatch({
                type: GET_RECORDS_SUCCESS,
                payload: res.data.patientList
            });
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};

export const getClientMetrics = id => dispatch => {
    dispatch({ type: GET_METRICS_START });
    axios
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/coachRoute/getClientMetrics/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            const clientRecords = [...results.data.patientMetrics];
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

export const getLastCheckInTime = id => dispatch => {
    axios
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/coachRoute/getLastCheckinTime/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            console.log('getLastCheckInTime', results);

            dispatch({
                type: GET_CHECKIN,
                payload: results.data.lastCheckin
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};

export const getGoals = id => dispatch => {
    axios
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/coachRoute/getClientGoals/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            console.log('getGoals actions', results);
            const clientGoals = [...results.data.patientGoals];
            dispatch({
                type: GET_GOALS,
                payload: clientGoals
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};
