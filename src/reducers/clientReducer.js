import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_CLIENTS_SUCCESS,
    GET_CLIENTS_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE
} from '../actions/types';

const initialState = {
    message: '',
    LoginAttempts: 0,
    clientinfo: {
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
        confirm_password: '',
        height: 0,
        sex: '',
        gender:'',
        coach: ''
    },
    records: null,
    Blood_sugar: 0,
    Weight: 0,
    Blood_pressure_over: 0,
    Blood_pressure_under: 0,
    Date_time: null,
    isfetching: false,
    error: '',

    clientMetrics: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_METRIC_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case UPDATE_METRIC_SUCCESS:
            return {
                ...state,
                isfetching: false,
                records: { ...action.payload },
                error: ''
            };
        case UPDATE_METRIC_FAILURE:
            return {
                ...state,
                isfetching: false,
                err: action.payload
            };
        case GET_CLIENTS_SUCCESS:
            return {
                ...state,
                isfetching: false,
                clientinfo: {
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    dob: action.payload.dob,
                    password: action.payload.password,
                    confirm_password: action.payload.confirm_password,
                    height: action.payload.height,
                    sex: action.payload.sex,
                    gender: action.payload.gender,
                },
                error: ''
            };
        case GET_CLIENTS_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        case GET_METRICS_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case GET_METRICS_SUCCESS:
            return {
                ...state,
                isfetching: false,
                clientMetrics: [...action.payload],
                error: ''
            };
        case GET_METRICS_FAILURE:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };

        case LOGIN_START:
            return {
                ...state,
                isfetching: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isfetching: false,
                error: ''
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isfetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
