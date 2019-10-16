import {
  GET_CLIENTS_START,
  GET_CLIENTS_SUCCESS,
  GET_CLIENTS_FAILURE,
  ADD_CLIENT,
  DELETE_CLIENT,
  CLIENTS_ERROR
} from '../actions/types';

const intialState = {
  clientInfo: {},
  gettingClient: false,
  error: null
};

const reducer = (state = intialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
