//authReducer
import {
	LOGIN_SUCCESS,
	GET_COACH_INFO,
} from "../actions/types";

const initialState = {
	loggingIn: false,
	loggedIn: false,
	isfetching: false,
	error: null,
	data: {},
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				loggingIn: false,
				loggedIn: true,
				data: action.payload,
			};
		case GET_COACH_INFO:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
