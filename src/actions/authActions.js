import api from '../components/utils/api';
import axiosWithCred from '../components/utils/axiosWithCred'
import axios from 'axios';
import toastr from 'toastr';
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE,
    GET_COACH_INFO
} from './types';

//Coach Registration endpoint
export const registerCoach = (props,coachData) => dispatch => {
    dispatch({ type: REGISTER_START });
    return axiosWithCred
        .post(
            `${process.env.REACT_APP_BACKEND}/auth/register?user_type=coach`,
            coachData
        )
        .then(res => {
            console.log(res);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            props.history.push('/coach-login')
            return res.data
        })
        .catch(err => {
            
            dispatch({
                type: REGISTER_FAIL,
                payload: err.message
            });
        });
};
//Coach login endpoint
export const loginCoach = (coachCreds) => dispatch => {
    dispatch({ type: LOGIN_START });
    return axiosWithCred
        .post(`${process.env.REACT_APP_BACKEND}/auth/login?user_type=coach`, coachCreds)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            
            return res.data
            
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err
            });
            toastr.error(err)
        });
};
//Get Coach Clientlist
export const getClients = token => dispatch => {
    
    axiosWithCred
        .get(`${process.env.REACT_APP_BACKEND}/coach/me`)
        .then(res => {
            console.log(res.data)
            
            dispatch({ type: GET_COACH_INFO,
                payload: res.data });
            return res.data 
            
           
        })
        .catch(err => {
            dispatch({
                type: GET_RECORDS_FAILURE,
                payload: err.message
            });
        });
};
