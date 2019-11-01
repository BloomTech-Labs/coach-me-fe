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
  messages:'',
  creds: {
    message: '',
    Phone: ''
  },
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
      case GET_TEXT_START:
          return {
              ...state,
              messages: action.payload,
              loading: true,
              
          };
      case GET_TEXT_SUCCESS:
          return {
              ...state,
              loading: false,
              messages: { ...action.payload },
          };
      case  ADD_TEXT_START:
          return {
              ...state,
              messages: [...state.messages, action.payload],
              loading: true,
          };
      case  ADD_TEXT_SUCCESS:
          return {
              ...state,
              loading: false,
              creds: {
                  ...state.creds,
                  message: action.payload.message,
                  Phone: action.payload.Phone,
              }
          };
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
