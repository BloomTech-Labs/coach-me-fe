import api from '../components/utils/api';
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
    GET_GOALS,
    ADD_SCHEDULE_MESSAGE_START,
    ADD_SCHEDULE_MESSAGE_SUCCESS,
    GET_SCHEDULE_MESSAGE_START,
    GET_SCHEDULE_MESSAGE_SUCCESS,
    DELETE_SCHEDULE_MESSAGE_START,
    DELETE_SCHEDULE_MESSAGE_SUCCESS,
    UPDATE_SCHEDULE_MESSAGE_START,
    UPDATE_SCHEDULE_MESSAGE_SUCCESS
} from './types';

const headers = {
    Authorization: localStorage.getItem('token')
};

export const getMessageHistory = liveNumber => dispatch => {
    dispatch({ type: GET_TEXT_START });
    api
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/messagehistory/${liveNumber}`
        )
        .then(res => {
            dispatch({
                type: GET_TEXT_SUCCESS,
                payload: res.data.message
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};

export const postMessage = post => dispatch => {
    dispatch({ type: ADD_TEXT_START });
    api

        .post(`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/twilio`, post)

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
    api
        .get(`http://localhost:5000/api/coach/me`,{withCredentials: true})
        .then(res => {
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
    api
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
    api
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/coachRoute/getLastCheckinTime/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
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
    api
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/coachRoute/getClientGoals/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
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

// get scheduled message

export const getScheduledMessage = id => dispatch => {
    dispatch({ type: GET_SCHEDULE_MESSAGE_START });
    api
        .get(
            `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/getScheduled/${id}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            // const scheduledMessage = [...results.data.scheduledMessage];
            dispatch({
                type: GET_SCHEDULE_MESSAGE_SUCCESS,
                payload: results.data.data
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
};

// post scheduled message
export const addScheduledMessage = message => dispatch => {
    dispatch({ type: ADD_SCHEDULE_MESSAGE_START });
    api
        .post(
            `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/postScheduled`,
            message,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            dispatch({
                type: ADD_SCHEDULE_MESSAGE_SUCCESS,
                payload: results.data
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
    // dispatch(getScheduledMessage(message.patientId));
};

// delete scheduled message
export const deleteScheduledMessage = (id, patientId) => dispatch => {
    dispatch({ type: DELETE_SCHEDULE_MESSAGE_START });
    api
        .delete(
            `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/deleteScheduled/${id}`
        )
        .then(results => {
            dispatch({
                type: DELETE_SCHEDULE_MESSAGE_SUCCESS,
                payload: id
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
    // dispatch(getScheduledMessage(patientId));
};

// update scheduled message
export const updateScheduledMessage = (id, message) => dispatch => {
    dispatch({ type: UPDATE_SCHEDULE_MESSAGE_START });
    api
        .put(
            `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/updateScheduled/${id}`,
            message,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }
        )
        .then(results => {
            dispatch({
                type: UPDATE_SCHEDULE_MESSAGE_SUCCESS,
                payload: results.data
            });
        })
        .catch(err => {
            dispatch({
                type: COACH_ERROR,
                payload: err.message
            });
        });
    // dispatch(getScheduledMessage(message.patientId));
};