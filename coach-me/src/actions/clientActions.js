import axios from 'axios'

//clientActions

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

const headers = { 'Content-Type': 'application/json' };



export const getClientInfo = num => dispatch => {
  const clientnum = {clientPhone:num}
  console.log(clientnum)
  dispatch({ type: GET_CLIENTS_START });
  axios.post(
      ` https://coach-me-backend.herokuapp.com/clientRoute/login`,clientnum
    )
    .then(res => {
      console.log('actions', res);
      localStorage.setItem('token',res.data.token)
      dispatch({
        type: GET_CLIENTS_SUCCESS,
        payload:res.data.clientObject.fields,
      });
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: GET_CLIENTS_FAILURE,
        payload: err
      });
    });
};

export const addMetric = metricUpdate => dispatch => {
  // debugger;

  dispatch({ type: UPDATE_METRIC_START });
  axios
    .post(
      `https://api.airtable.com/v0/appcN0W3AgVhxnhNI/Outcomes  ?api_key=keyHl8AuDrb2mt77E`,
      metricUpdate,
      { headers: headers }
    )
    .then(res => {
      console.log('UPDATED METRIC', res);
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
