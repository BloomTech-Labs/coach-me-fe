import toastr from "toastr";
import apiCall from "../../utils/api";
import axiosWithCred from "../../utils/axiosWithCred";
import {
	EMAIL_REQUEST_SUCCESS,
	EMAIL_REQUEST_FAILURE,
	PASSWORD_RESET_SUCCESS,
	PASSWORD_RESET_FAILURE,
	CLIENT_REGISTER_SUCCESS,
	CLIENT_LOGIN_SUCCESS,
	GET_CLIENT_INFO,
	GET_CLIENTS_FAILURE,
	//legacy
	UPDATE_METRIC_START,
	UPDATE_METRIC_SUCCESS,
	UPDATE_METRIC_FAILURE,
	GET_METRICS_START,
	GET_METRICS_SUCCESS,
	GET_METRICS_FAILURE,
} from "./types";

export const getClientInfoRegister = (userAccountDetails) => (dispatch) => {
	return apiCall()
		.post(
			`${process.env.REACT_APP_BACKEND}/auth/register?user_type=client`,
			userAccountDetails
		)
		.then((res) => {
			window.location = "/createProfile1";
			dispatch({
				type: CLIENT_REGISTER_SUCCESS,
				payload: res.config.data,
			});
			return res;
		})
		.catch((err) => {
			dispatch({
				type: GET_CLIENTS_FAILURE,
				payload: err.response,
			});
		});
};

export const getClientInfoLogin = (input) => (dispatch) => {
	return apiCall()
		.post(
			`${process.env.REACT_APP_BACKEND}/auth/login?user_type=client`,
			input
		)
		.then((res) => {
			console.log("login, res.config.data",res.config.data)
			window.location = "/dashboard-client";
			dispatch({
			    type: CLIENT_LOGIN_SUCCESS,
			    payload: res.config.data
			})
		})
		.catch((err) => {
			toastr.error(err);
		});
};

export const sendEmail = ({ cred_value, method }) => (dispatch) => {
	axiosWithCred
		.post(`/auth/forgot_password?user_type=client`, { method, cred_value })
		.then(() => {})
		.catch((err) => {
			dispatch({
				type: EMAIL_REQUEST_FAILURE,
				payload: err.message,
			});
		});
};

export const getNewPassword = ({ newPassword, repPassword, token }) => (
	dispatch
) => {
	apiCall()
		.post(`/auth/forgot_password/password_recovery?token=${token}`, {
			password: newPassword,
		})
		.then(() => {})
		.catch((err) => {
			dispatch({
				type: PASSWORD_RESET_FAILURE,
				payload: err.message,
			});
		});
};

export const getClientInfo = (token) => (dispatch) => {
	axiosWithCred
		.get(`/client/me`)
		.then((res) => {
			dispatch({
				type: GET_CLIENT_INFO,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_CLIENTS_FAILURE,
				payload: err.message,
			});
		});
};

//legacy
export const addMetric = (metricUpdate) => (dispatch) => {
	dispatch({ type: UPDATE_METRIC_START });
	axiosWithCred
		.post(
			`${process.env.REACT_APP_BACK_END_URL}/clientRoute/logMetrics `,
			metricUpdate,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: localStorage.getItem("token"),
				},
			}
		)
		.then((res) => {
			dispatch({
				type: UPDATE_METRIC_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: UPDATE_METRIC_FAILURE,
				payload: err.message,
			});
		});
};

export const getClientRecords = () => (dispatch) => {
	dispatch({ type: GET_METRICS_START });
	axiosWithCred
		.get(
			`${process.env.REACT_APP_BACK_END_URL}/clientRoute/paginationGetMetrics`,
			{
				headers: {
					Authorization: localStorage.getItem("token"),
				},
			}
		)
		.then((results) => {
			const clientRecords = [...results.data.clientRecords];
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
