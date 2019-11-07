//authReducer
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START
    // LOGOUT,
} from '../actions/types';

const initialState = {
    coachName: '',
    loggingIn: false,
    isfetching: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                coachName: action.payload
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
