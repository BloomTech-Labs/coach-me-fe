import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_START,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_CLIENTS_START,
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
        height: '',
        sex: '',
        gender:'',
        coach: '',
        language: '',
        name: ''
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
                    ...state.clientinfo,
                    id: action.payload['Coaching master table'],
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    email: payload.email,
                    phone: payload.phone,
                    dob: payload.dob,
                    password: payload.password,
                    confirm_password: payload.confirm_password,
                    height: payload.height,
                    sex: payload.sex,
                    gender:payload.gender,
                    coach: action.payload.Coach,
                    language: action.payload.Language,
                    name: action.payload['Client Name']
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
