import axios from "axios";

export default function () {
	axios.defaults.withCredentials = true;
	return axios.create({
		baseURL: process.env.REACT_APP_BACKEND,
	});
}
