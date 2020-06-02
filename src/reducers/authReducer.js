//authReducer
import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START
    // LOGOUT,
} from '../actions/types';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    isfetching: false,
    error: null,
    data: {}
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                loggingIn: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                success: action.payload,
                loggedIn: true
            };
        case REGISTER_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                data: action.payload
                
            };
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;