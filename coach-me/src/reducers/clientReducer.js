import {
  GET_CLIENTS,
  ADD_CLIENT,
  DELETE_CLIENT,
  CLIENTS_ERROR,
  UPDATE_METRIC_START,
  UPDATE_METRIC_SUCCESS,
  UPDATE_METRIC_FAILURE,
  GET_CLIENTS_START,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE
} from '../actions/types';

const initialState = {
  clientinfo: {
    id: '',
    phonenumber: '',
    coach: '',
    language: '',
    name: ''
  },
  records: null,
  isfetching: false,
  error: ''
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
          id: action.payload.id,
          phonenumber: action.payload.info.Phone,
          coach: action.payload.info.Coach,
          language: action.payload.info.Language,
          name: action.payload.info['Client Name']
        },
        error: ''
      };
    case GET_CLIENTS_FAILURE:
      return {
        ...state,
        isfetching: false,
        err: action.payload
      };
    default:
      return state;
  }
};
