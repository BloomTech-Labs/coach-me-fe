import {
    GET_TEXT_START,
    GET_TEXT_SUCCESS,
    ADD_TEXT_START,
    ADD_TEXT_SUCCESS,
    COACH_ERROR,
    GET_RECORDS_START,
    GET_RECORDS_SUCCESS,
    GET_RECORDS_FAILURE
} from '../actions/types';

const initialState = {
    messageHistory: [],
    creds: {
        message: '',
        Phone: ''
    },
    loading: false,
    error: null,
    clientRecords: []
};

export default (state = initialState, action) => {
    console.log('coachReducer', state);
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
                messageHistory: action.payload.messages
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
                    message: action.payload.message,
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
            //   console.log(action.payload)
            return {
                ...state,
                loading: false,
                clientRecords: [...action.payload],
                error: ''
            };
        case GET_RECORDS_FAILURE:
        case COACH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
