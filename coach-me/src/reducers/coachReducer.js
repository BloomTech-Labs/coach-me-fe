import {
    GET_TEXT_START,
    GET_TEXT_SUCCESS,
    ADD_TEXT_START,
    ADD_TEXT_SUCCESS,
    COACH_ERROR,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE,
    GET_METRICS_START,
    GET_METRICS_SUCCESS,
    GET_METRICS_FAILURE,
    GET_CHECKIN
} from '../actions/types';

const initialState = {
    messageHistory: [],
    creds: {
        message: '',
        Phone: ''
    },
    loading: false,
    error: null,
    clientRecords: [],
    clientMetrics: [],
    clientCheckIn: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEXT_START:
            return {
                ...state,
                loading: true
            };
        case GET_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                messageHistory: action.payload
            };
        case ADD_TEXT_START:
            return {
                ...state,
                messages: action.payload,
                loading: true
            };
        case ADD_TEXT_SUCCESS:
            return {
                ...state,
                loading: false,
                creds: {
                    ...state.creds,
                    message: action.payload,
                    Phone: action.payload.Phone
                }
            };
        case GET_RECORDS_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case GET_RECORDS_SUCCESS:
            return {
                ...state,
                loading: false,
                clientRecords: [...action.payload],
                error: ''
            };
        case GET_CHECKIN:
            return {
                ...state,
                loading: false,
                clientCheckIn: action.payload,
                error: ''
            };
        case GET_RECORDS_FAILURE:
        case COACH_ERROR:
            return {
                ...state,
                loading: false,
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
        default:
            return state;
    }
};
