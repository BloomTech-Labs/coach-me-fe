import React, { useState } from "react";
import LoginForm from './LoginForm';
import { useDispatch } from "react-redux";
import Show from "../assets/show_password.png";
import Hide from "../assets/hide_password.png";
import { getClientInfoLogin } from "../../../actions/clientActions";
import "./loginClient.scss";

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
	const handleChange = (e) => setinput({ ...input, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getClientInfoLogin(input)).then(res => {
			console.log(res)
			props.history.push('/dashboard-client');
		});
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
	)
};

export default LoginClient;