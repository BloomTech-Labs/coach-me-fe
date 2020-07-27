import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_CLIENTS_SUCCESS,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE,
    GET_UPCOMING_SESSIONS,
    GET_CLIENTS_FAILURE,
    EMAIL_REQUEST_SUCCESS,
    EMAIL_REQUEST_FAILURE,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAILURE,
    GET_CLIENT_INFO,
    CLIENT_REGISTER_SUCCESS,
    CLIENT_LOGIN_SUCCESS,
    GET_MY_COACH,
    GET_CLIENT_GOALS,
} from '../actions/types';

const initialState = {
    message: '',
    LoginAttempts: 0,
    clientinfo: {},
    records: null,
    Blood_sugar: 0,
    Weight: 0,
    Blood_pressure_over: 0,
    Blood_pressure_under: 0,
    Date_time: null,
    isfetching: false,
    error: '',
    client_data: {
        coach: {
            calendly_url: '',
        },
    },
    loggedIn: false,
    clientMetrics: [],
    myCoach: {},
    upcomingSessions: [],
    myGoals : []
		
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CLIENT_REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: false,
                client_data: action.payload,
            };
        case CLIENT_LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                client_data: action.payload,
                error: '',
            };
        case EMAIL_REQUEST_SUCCESS:
            return {
                ...state,
                isfetching: false,
                email: action.payload,
            };
        case EMAIL_REQUEST_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload,
            };
        case PASSWORD_RESET_SUCCESS:
            return {
                ...state,
                isfetching: false,
                password: action.payload,
            };
        case PASSWORD_RESET_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload,
            };
        case GET_CLIENT_INFO:
            return {
                ...state,
                loggedIn: true,
                client_data: action.payload,
            };
        case GET_CLIENTS_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload,
            };
        case GET_MY_COACH:
            return {
                ...state,
                myCoach: action.payload,
						};
				case GET_UPCOMING_SESSIONS:
						return {
							...state,
							upcomingSessions: action.payload
                        }
        case GET_CLIENT_GOALS:
            return {
                ...state,
                myGoals: action.payload
            }
        default:
            return state;
    }
};
