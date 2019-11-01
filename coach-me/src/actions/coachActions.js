import axios from 'axios'
import {
  GET_TEXT_START,
  GET_TEXT_SUCCESS,
  ADD_TEXT_START,
  ADD_TEXT_SUCCESS,
  COACH_ERROR
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