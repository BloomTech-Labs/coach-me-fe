import axios from 'axios'
import {
  GET_TEXT_START,
  GET_TEXT_SUCCESS,
  ADD_TEXT_START,
  ADD_TEXT_SUCCESS,
  COACH_ERROR,
  GET_RECORDS_START,
 GET_RECORDS_SUCCESS,
 GET_RECORDS_FAILURE
} from './types';

export const getMessageHistory = () => dispatch => {
  dispatch({type: GET_TEXT_START})
  axios
      .get(
          `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/messagehistory/(806)518-8727`
      )
      .then(res => {
          console.log('getMessageHistory', res.data);
          dispatch({
            type: GET_TEXT_SUCCESS,
            payload: res.data
          })
           
      })
      .catch(err => console.log('getMessageHistory ERR', err));
};

export const postMessage = post => dispatch => {
  dispatch({type: ADD_TEXT_START })
  axios
      .post(`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/twilio`, post)
      .then(res => {
        dispatch({
          type: ADD_TEXT_SUCCESS
        })
      })
      .catch(err => {
        dispatch({
            type: COACH_ERROR,
            payload: err.message
        });
    });
};

export const getClients = token => dispatch => {
    const headers = { Authorization: token };
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(`${process.env.REACT_APP_BACK_END_URL}/coachRoute/getPatients`, {
            headers: headers
        })
        .then(res => {
            console.log(res.data.patientList);

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