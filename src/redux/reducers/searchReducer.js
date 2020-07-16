import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions/types";

const initialState = {
	clients: {
		first_name: "",
		last_name: "",
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_SUCCESS:
			console.log("search success");
			return {
				...state,
				clients: action.payload,
			};
		case SEARCH_FAILURE:
			console.log("search failure");
			return {
				...state,
				error: action.payload,
			};
	}
};
