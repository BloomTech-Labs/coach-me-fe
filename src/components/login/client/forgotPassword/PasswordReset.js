import React, { useState } from "react";
import PasswordForm from "./PasswordForm";
import { useDispatch } from "react-redux";
import Show from "../../../../utils/assets/icons/login/show_password.png";
import Hide from "../../../../utils/assets/icons/login/hide_password.png";
import { getNewPassword } from "../../../../redux/actions/clientActions";
import { useLocation } from "react-router-dom";
import "../../../../sass/login/client/loginClient.scss";

const PasswordReset = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [input, setinput] = useState({ newPassword: "", repPassword: "" });
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
	const handleChange = (e) =>
		setinput({ ...input, [e.target.name]: e.target.value });
	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.newPassword === input.repPassword)
			dispatch(
				getNewPassword({
					...input,
					token: location.search.split("?token=")[1],
				})
			);
	};
	return (
		<PasswordForm
			input={input}
			hidden={hidden}
			source={source}
			handleClick={handleClick}
			handleChange={handleChange}
			handleSubmit={handleSubmit}
		/>
	);
};

export default PasswordReset;
