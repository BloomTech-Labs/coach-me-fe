import axiosWithCred from "../../utils/axiosWithCred";
import toastr from "toastr";
import {
	LOGIN_SUCCESS,
	GET_RECORDS_FAILURE,
	GET_COACH_INFO,
} from "./types";

//Coach Registration endpoint
export const registerCoach = (coachData) => (dispatch) => {
	return axiosWithCred
		.post(
			`${process.env.REACT_APP_BACKEND}/auth/register?user_type=coach`,
			coachData
		)
		.then((res) => {
			window.location = "/coach-login";
		})
		.catch((err) => {
			toastr.error(err);
		});
};
//Coach login endpoint
export const loginCoach = (coachCreds) => (dispatch) => {
	return axiosWithCred
		.post(
			`${process.env.REACT_APP_BACKEND}/auth/login?user_type=coach`,
			coachCreds
		)
		.then(async (res) => {
			window.location = "/dashboard";
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.config.data,
				coachCreds: res.coachCreds,
			});
		})
		.catch((err) => {
			toastr.error(err);
		});
};
//Get current logged in coaches user information
export const getCoach = (token) => (dispatch) => {
	axiosWithCred
		.get(`${process.env.REACT_APP_BACKEND}/coach/me`)
		.then((res) => {
			dispatch({ type: GET_COACH_INFO, payload: res.data });
			return res.data;
		})
		.catch((err) => {
			dispatch({
				type: GET_RECORDS_FAILURE,
				payload: err.message,
			});
		});
};
