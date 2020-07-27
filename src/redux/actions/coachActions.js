import api from "../../utils/api";
import toastr from 'toastr';
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
	ASSIGN_CLIENT

} from "./types";

import axiosWithCred from "../../utils/axiosWithCred";

const headers = {
	Authorization: localStorage.getItem("token"),
};

export const getMessageHistory = (liveNumber) => (dispatch) => {
	dispatch({ type: GET_TEXT_START });
	api.get(
		`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/messagehistory/${liveNumber}`
	)
		.then((res) => {
			dispatch({
				type: GET_TEXT_SUCCESS,
				payload: res.data.message,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
};

export const postMessage = (post) => (dispatch) => {
	dispatch({ type: ADD_TEXT_START });
	api.post(`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/twilio`, post)

		.then((res) => {
			dispatch({
				type: ADD_TEXT_SUCCESS,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
};

export const getClientList = (id) => (dispatch) => {
	// console.log("coachActions getClientList id", id);
	
	axiosWithCred
		.get(`${process.env.REACT_APP_BACKEND}/coach/${id}/clients`)
		.then((res) => {
			dispatch({
				type: GET_CLIENT_LIST_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_CLIENT_LIST_FAILURE,
				payload: err.message,
			});
		});
};
export const getUnassignedClients = () => (dispatch) => {
	
	axiosWithCred
	.get(`${process.env.REACT_APP_BACKEND}/client/`)
	.then(res => {
		console.log(res)
		dispatch({
			type: GET_UNASSIGNED_CLIENTS,
			payload: res.data
		});
	})
	.catch(err => {
		console.log(err)
	})
}
export const assignClient = (id,clientId) => (dispatch) => {
	axiosWithCred
	.post(`${process.env.REACT_APP_BACKEND}/coach/${id}/clients/${clientId}`)
	.then(res => {
		console.log(res)
	})
	.catch(err => {
		console.log(err)
	})
}

export const updateSelectedClient = (selectedClient) => (dispatch) => {
	dispatch({ type: UPDATE_SELECTED_CLIENT, payload: selectedClient});
}

export const getClients = (id) => (dispatch) => {
	dispatch({ type: GET_RECORDS_START });
	api.get(`${process.env.REACT_APP_BACKEND}/api/coach/${id}/clients`)
		.then((res) => {
			dispatch({
				type: GET_RECORDS_SUCCESS,
				payload: res.data.patientList,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_RECORDS_FAILURE,
				payload: err.message,
			});
		});
};

export const getClientMetrics = (id) => (dispatch) => {
	dispatch({ type: GET_METRICS_START });
	api.get(
		`${process.env.REACT_APP_BACKEND}/coachRoute/getClientMetrics/${id}`,
		{
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		}
	)
		.then((results) => {
			const clientRecords = [...results.data.patientMetrics];
			dispatch({
				type: GET_METRICS_SUCCESS,
				payload: clientRecords,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_METRICS_FAILURE,
				payload: err.message,
			});
		});
};

export const getLastCheckInTime = (id) => (dispatch) => {
	api.get(
		`${process.env.REACT_APP_BACKEND}/coachRoute/getLastCheckinTime/${id}`,
		{
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		}
	)
		.then((results) => {
			dispatch({
				type: GET_CHECKIN,
				payload: results.data.lastCheckin,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
};

// get the list of client goals to the coach dashboard
export const getClientGoals = (coachID, clientID) => (dispatch) => {
	axiosWithCred
	.get(`${process.env.REACT_APP_BACKEND}/coach/${coachID}/clients/${clientID}/goals`)
	.then((res) => {
		dispatch({
			type: GET_CLIENT_GOALS_SUCCESS,
			payload: res.data,
		});
	})
	.catch((err) => {
		dispatch({
			type: GET_CLIENT_GOALS_FAILURE,
			payload: err.message,
		});
	});
};

//gets the selected goal in the client list
export const getClientGoal = (coachID, clientID, goalID) => (dispatch) => {
	axiosWithCred
	.get(`${process.env.REACT_APP_BACKEND}/coach/${coachID}/clients/${clientID}/goals/${goalID}`)
	.then((res) => {
		dispatch({
			type: GET_CLIENT_GOAL_SUCCESS,
			payload: res.data
		});
	})
	.catch((err) => {
		dispatch({
			type: GET_CLIENT_GOAL_FAILURE,
			payload: err.message,
		});
	});
};

export const getSelectedClientGoal = (selectedGoal) => (dispatch) => {
	dispatch({ type: UPDATE_SELECTED_CLIENT_GOAL, payload: selectedGoal});
}

//add a goal to the client's goal list
export const addClientGoal = (coachID, clientID, goal) => (dispatch) => {
	axiosWithCred
		.post(`${process.env.REACT_APP_BACKEND}/coach/${coachID}/clients/${clientID}/goals`, goal)
		.then((res) => {
			console.log(res.data)
			toastr.success('Goal successfully added.')
			dispatch({
				type: ADD_CLIENT_GOAL_SUCCESS,
				payload: res.data
			});
		})
		.catch((err) => {
			toastr.error('There was an issue while adding your goal.')
			dispatch({
				type: ADD_CLIENT_GOAL_FAILURE,
				payload: err.message,
			});
		});
};

//updates the selected goal in the client list
export const updateClientGoal = (coachID, clientID, goalID, goal) => (dispatch) => {
	axiosWithCred
	.put(`${process.env.REACT_APP_BACKEND}/coach/${coachID}/clients/${clientID}/goals/${goalID}`, goal)
	.then((res) => {
		dispatch({
			type: UPDATE_CLIENT_GOAL_SUCCESS,
			payload: res.data,
		});
		toastr.success('Goal successfully updated.')
	})
	.catch((err) => {
		toastr.error('There was an issue while updating your goal.')
		dispatch({
			type: UPDATE_CLIENT_GOAL_FAILURE,
			payload: err.message,
		});
	});
};

//delete a goal from the client's goal list
export const deleteClientGoal = (coachID, clientID, goalID) => (dispatch) => {
	axiosWithCred
	.delete(`${process.env.REACT_APP_BACKEND}/coach/${coachID}/clients/${clientID}/goals/${goalID}`)
	.then((res) => {
		dispatch({
			type: DELETE_CLIENT_GOAL_SUCCESS,
			payload: res.data,
		});
	})
	.catch((err) => {
		toastr.error('There was an error while deleting the client goal.')
		dispatch({
			type: DELETE_CLIENT_GOAL_FAILURE,
			payload: err.message,
		});
	});
};

// get scheduled message

export const getScheduledMessage = (id) => (dispatch) => {
	dispatch({ type: GET_SCHEDULE_MESSAGE_START });
	api.get(
		`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/getScheduled/${id}`,
		{
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		}
	)
		.then((results) => {
			// const scheduledMessage = [...results.data.scheduledMessage];
			dispatch({
				type: GET_SCHEDULE_MESSAGE_SUCCESS,
				payload: results.data.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
};

// post scheduled message
export const addScheduledMessage = (message) => (dispatch) => {
	dispatch({ type: ADD_SCHEDULE_MESSAGE_START });
	api.post(
		`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/postScheduled`,
		message,
		{
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		}
	)
		.then((results) => {
			dispatch({
				type: ADD_SCHEDULE_MESSAGE_SUCCESS,
				payload: results.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
	// dispatch(getScheduledMessage(message.patientId));
};

// delete scheduled message
export const deleteScheduledMessage = (id, patientId) => (dispatch) => {
	dispatch({ type: DELETE_SCHEDULE_MESSAGE_START });
	api.delete(
		`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/deleteScheduled/${id}`
	)
		.then((results) => {
			dispatch({
				type: DELETE_SCHEDULE_MESSAGE_SUCCESS,
				payload: id,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
	// dispatch(getScheduledMessage(patientId));
};

// update scheduled message
export const updateScheduledMessage = (id, message) => (dispatch) => {
	dispatch({ type: UPDATE_SCHEDULE_MESSAGE_START });
	api.put(
		`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/updateScheduled/${id}`,
		message,
		{
			headers: {
				Authorization: localStorage.getItem("token"),
			},
		}
	)
		.then((results) => {
			dispatch({
				type: UPDATE_SCHEDULE_MESSAGE_SUCCESS,
				payload: results.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: COACH_ERROR,
				payload: err.message,
			});
		});
	// dispatch(getScheduledMessage(message.patientId));
};
