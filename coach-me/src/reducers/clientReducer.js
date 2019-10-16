import {
    GET_CLIENTS,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE
} from '../actions/types';

const initialState = {
    records: null,
    isfetching: false,
    error: '',
    clientRecords: null
};

export default (state = initialState, action) => {
    console.log('These are teh actions', action.payload);
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
        case GET_RECORDS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case GET_RECORDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                clientRecords: [...action.payload],
                error: ''
            };
        case GET_RECORDS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};
