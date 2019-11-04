import axios from 'axios'
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLIENT_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    LOGOUT,
    CLEAR_ERRORS,
    GET_RECORDS_START ,
 GET_RECORDS_SUCCESS,
 GET_RECORDS_FAILURE
} from './types';



export const registerCoach = register => dispatch => {
    const creds = register.records[0].fields
    dispatch({ type: REGISTER_START });
    axios
        .post(
            `https://coach-me-backend.herokuapp.com/coachRoute/newRegister `,creds
           
        )
        .then(res => {
            console.log(res)
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.message
            });
        });
};


export const loginCoach = creds =>  dispatch => {
 
    dispatch({ type: LOGIN_START });
    axios
        .post(
            `https://coach-me-backend.herokuapp.com/coachRoute/login`,creds
        )
        .then(res => {
        console.log(res)
            localStorage.setItem('token',res.data.token)
            dispatch({
                type: LOGIN_SUCCESS,
               
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAIL,
                payload: err.message
            });
        });
};

export const getClients= (token) => dispatch => {
    const headers = {Authorization:token}
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(
            `https://coach-me-backend.herokuapp.com/coachRoute/getPatients`,{headers:headers}
        
           
        )
        .then(res => {
            console.log(res.data.patientList)
            
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

export const getLastCheckin= (id) => dispatch => {
    const token = localStorage.getItem('token')
    const headers = {Authorization:token}
    dispatch({ type: GET_RECORDS_START });
    axios
        .get(
            `https://coach-me-backend.herokuapp.com/coachRoute/getLastCheckinTime/${id}`,{headers:headers}
        
           
        )
        .then(res => {
            console.log(res)
            
            // dispatch({
            //     type: GET_RECORDS_SUCCESS,
            //    payload: res.data.patientList
            // });
        })
        .catch(err => {
            console.log(err)
        //     dispatch({
        //         type: GET_RECORDS_FAILURE,
        //         payload: err.message
        //     });
        });
};

