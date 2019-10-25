import axios from 'axios'
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLIENT_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from './types';


export const registerUser = register => dispatch => {
    dispatch({ type: REGISTER_START });
    axios
        .post(
            `https://coach-me-backend.herokuapp.com/registercoach `,
            register,
           
        )
        .then(res => {
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