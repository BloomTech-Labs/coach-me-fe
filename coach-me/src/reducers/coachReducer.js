import {
  GET_TEXT_START,
  GET_TEXT_SUCCESS,
  GET_TEXT_FAILURE,
  ADD_TEXT_START,
  ADD_TEXT_SUCCESS,
  ADD_TEXT_FAILURE
} from '../actions/types';

const initialState = {
  message:'',
  Phone: ''
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
          console.log(state,action.payload)
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
      case GET_CLIENTS_START:
          return {
              ...state,
              isfetching: true,
              error: ''
          };
      case GET_CLIENTS_SUCCESS:
          return {
              ...state,
              isfetching: false,
              clientinfo: {
                  ...state.clientinfo,
                  id: action.payload['Coaching master table'],
                  phonenumber: action.payload.Phone,
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
      case GET_RECORDS_START:
          return {
              ...state,
              isfetching: true,
              error: ''
          };
      case GET_RECORDS_SUCCESS:
      console.log(action.payload)
          return {
              ...state,
              isfetching: false,
              clientRecords: [...action.payload],
              error: ''
          };
      case GET_RECORDS_FAILURE:
          return {
              ...state,
              isfetching: false,
              error: action.payload
          };
      default:
          return state;
  }
};