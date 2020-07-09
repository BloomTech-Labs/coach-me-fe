import api from "../../utils/api";
import { SEARCH_START, SEARCH_SUCCESS, SEARCH_FAILURE } from "./types";

import axiosWithCred from "../../utils/axiosWithCred";

const headers = {
	Authorization: localStorage.getItem("token"),
};

export const searchClients = ({ id, firstname, lastname }) => (dispatch) => {
	dispatch({ type: SEARCH_START });

	axiosWithCred
		.get(
			`${process.env.REACT_APP_BACK_END_URL}/${id}/search?first_name=${firstname}&last_name=${lastname}`
		)

		.then((res) => {
			dispatch({
				type: SEARCH_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: SEARCH_FAILURE,
				payload: err.message,
			});
		});
};
