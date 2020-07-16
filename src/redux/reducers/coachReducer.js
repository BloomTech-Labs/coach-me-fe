import {
	GET_TEXT_START,
	GET_TEXT_SUCCESS,
	ADD_TEXT_START,
	ADD_TEXT_SUCCESS,
	COACH_ERROR,
	GET_RECORDS_START,
	GET_RECORDS_SUCCESS,
	GET_RECORDS_FAILURE,
	GET_METRICS_START,
	GET_METRICS_SUCCESS,
	GET_METRICS_FAILURE,
	GET_CHECKIN,
	ADD_SCHEDULE_MESSAGE_START,
	ADD_SCHEDULE_MESSAGE_SUCCESS,
	GET_SCHEDULE_MESSAGE_START,
	GET_SCHEDULE_MESSAGE_SUCCESS,
	DELETE_SCHEDULE_MESSAGE_START,
	DELETE_SCHEDULE_MESSAGE_SUCCESS,
	UPDATE_SCHEDULE_MESSAGE_START,
	UPDATE_SCHEDULE_MESSAGE_SUCCESS,
	GET_COACH_INFO,
	GET_CLIENT_LIST_START,
	GET_CLIENT_LIST_SUCCESS,
	GET_CLIENT_LIST_FAILURE,
	UPDATE_SELECTED_CLIENT,
	GET_CLIENT_GOALS_SUCCESS,
	GET_CLIENT_GOALS_FAILURE,
	GET_CLIENT_GOAL_SUCCESS,
	GET_CLIENT_GOAL_FAILURE,
	UPDATE_SELECTED_CLIENT_GOAL,
	ADD_CLIENT_GOAL_SUCCESS,
	ADD_CLIENT_GOAL_FAILURE,
	UPDATE_CLIENT_GOAL_SUCCESS,
	UPDATE_CLIENT_GOAL_FAILURE,
	DELETE_CLIENT_GOAL_SUCCESS,
	DELETE_CLIENT_GOAL_FAILURE,
	GET_UNASSIGNED_CLIENTS,
	ASSIGN_CLIENT,
} from "../actions/types";

const initialState = {
	messageHistory: [],
	creds: {
		first_name: "",
		last_name: "",
	},
	loading: false,
	error: null,
	clientList: [],
	selectedClient: {},
	clientRecords: [],
	clientMetrics: [],
	clientCheckIn: "",
	clientGoals: [],
	selectedGoal: {},
	scheduledMessage: [],
	availableClients:{},
	data: {},
};
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_CLIENT_LIST_START:
			return {
				...state,
				loading: true,
			};
		case GET_CLIENT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				clientList: action.payload,
			};
		case UPDATE_SELECTED_CLIENT:
			return {
				...state,
				selectedClient: action.payload,
			};
		case GET_CLIENT_LIST_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case GET_TEXT_START:
			return {
				...state,
				loading: true,
			};
		case GET_TEXT_SUCCESS:
			return {
				...state,
				loading: false,
				messageHistory: action.payload,
			};
		case ADD_TEXT_START:
			return {
				...state,
				messages: action.payload,
				loading: true,
			};
		case ADD_TEXT_SUCCESS:
			return {
				...state,
				loading: false,
				creds: {
					...state.creds,
					message: action.payload,
					Phone: action.payload.Phone,
				},
			};
		case GET_SCHEDULE_MESSAGE_START:
		case GET_RECORDS_START:
			return {
				...state,
				loading: true,
				first_name: action.payload.first_name,
				last_name: action.payload.last_name,
			};
		case GET_RECORDS_SUCCESS:
			return {
				...state,
				loading: false,
				clientRecords: [...action.payload],
				error: "",
			};
		case GET_SCHEDULE_MESSAGE_SUCCESS:
			return {
				...state,
				loading: false,
				scheduledMessage: action.payload,
				error: "",
			};
		case GET_CHECKIN:
			return {
				...state,
				loading: false,
				clientCheckIn: action.payload,
				error: "",
			};
		case GET_METRICS_START:
			return {
				...state,
				loading: true,
				error: "",
			};
		case GET_METRICS_SUCCESS:
			return {
				...state,
				loading: false,
				clientMetrics: [...action.payload],
				error: "",
			};

		//WORKING ON CURRENTLY 7/8/20
		case GET_CLIENT_GOALS_SUCCESS:
			return {
				...state,
				loading: false,
				clientGoals: [...action.payload],
				error: "",
			};
		case GET_CLIENT_GOALS_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		case GET_CLIENT_GOAL_SUCCESS:
			return {
				...state,
				loading: false,
				clientGoals: [...action.payload],
				error: "",
			};
		case GET_CLIENT_GOAL_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case UPDATE_SELECTED_CLIENT_GOAL:
			return {
				...state,
				selectedGoal: action.payload,
			};
		case ADD_CLIENT_GOAL_SUCCESS:
			return {
				...state,
				loading: false,
				clientGoals: [...action.payload],
				error: "",
			};
		case ADD_CLIENT_GOAL_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		case UPDATE_CLIENT_GOAL_SUCCESS:
			return {
				...state,
				loading: false,
				clientGoals: [...action.payload],
				error: "",
			};
		case UPDATE_CLIENT_GOAL_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		case DELETE_CLIENT_GOAL_SUCCESS:
			return {
				...state,
				loading: false,
				clientGoals: [...action.payload],
				error: "",
			};
		case DELETE_CLIENT_GOAL_FAILURE:
			return {
				...state,
				error: action.payload,
			}
		//END OF WORKING ON CURRENTLY 7/8/20

		case ADD_SCHEDULE_MESSAGE_START:
			return {
				...state,
				loading: true,
			};
		case ADD_SCHEDULE_MESSAGE_SUCCESS:
			return {
				...state,
				laoding: false,
			};
		case UPDATE_SCHEDULE_MESSAGE_SUCCESS:
			// return {
			//     ...state,
			//     scheduledMessage: state.scheduledMessage.map(message =>
			//         message.scheduleId === action.payload.id
			//             ? action.payload
			//             : message
			//     )
			// };
			return {
				...state,
				loading: false,
				// scheduledMessage: action.payload
			};

		case GET_METRICS_FAILURE:
		case GET_RECORDS_FAILURE:
		case COACH_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case GET_COACH_INFO:
			return {
				...state,
				data: action.payload,
			};
		case GET_UNASSIGNED_CLIENTS:
			return {
				...state,
				availableClients: action.payload,
			}
		case ASSIGN_CLIENT:
			return {
				...state,clientList: [state.clientList,action.payload]
			}
		default:
			return state;
	}
};
