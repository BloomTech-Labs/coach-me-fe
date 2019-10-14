import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	CLIENT_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERRORS
} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
