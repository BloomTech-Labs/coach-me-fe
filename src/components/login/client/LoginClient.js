import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import Show from "../../../utils/assets/icons/login/show_password.png";
import Hide from "../../../utils/assets/icons/login/hide_password.png";
import { getClientInfoLogin } from "../../../redux/actions/clientActions";
import "../../../sass/login/client/loginClient.scss";

const LoginClient = (props) => {
	const dispatch = useDispatch();
	const [input, setinput] = useState({ email: "", password: "" });
	const [hidden, setHidden] = useState(true);
	const [source, setSource] = useState(Show);
	const handleClick = () => {
		if (hidden === false) {
			setHidden(true);
			setSource(Show);
		} else {
			setHidden(false);
			setSource(Hide);
		}
	};
	const handleChange = (e) => {
		setinput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getClientInfoLogin(input));
	};
	return (
		<LoginForm
			input={input}
			hidden={hidden}
			source={source}
			handleClick={handleClick}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};
export default LoginClient;