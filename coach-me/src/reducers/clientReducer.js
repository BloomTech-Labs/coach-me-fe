import {
  GET_CLIENTS_START,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  GET_CLIENTS,
  ADD_CLIENT,
  DELETE_CLIENT,
  CLIENTS_ERROR,
  UPDATE_METRIC_START,
  UPDATE_METRIC_SUCCESS,
  UPDATE_METRIC_FAILURE
} from '../actions/types';

const initialState = {
  clientInfo: {},
  gettingClient: false,
  records: null,
  isfetching: false,
  error: ''
};

export default (state = initialState, action) => {
  console.log('These are teh actions', action.payload);
  switch (action.type) {
    case GET_CLIENTS_START:
      return {
        ...state,
        gettingClient: true
      };
    case GET_CLIENTS_SUCCESS:
      return {
        ...state,
        gettingClient: false,
        clientInfo: action.payload
      };
    case GET_CLIENTS_FAILURE:
      return {
        ...state,
        gettingClient: false,
        error: action.payload
      };
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
    default:
      return state;
  }
};
