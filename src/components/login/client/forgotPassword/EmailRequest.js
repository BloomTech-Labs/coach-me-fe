import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../../../redux/actions/clientActions";
import "../../../../sass/login/client/loginClient.scss";

const EmailRequest = (props) => {
	const dispatch = useDispatch();
	const [input, setinput] = useState({ cred_value: "", method: "email" });
	const handleChange = (e) => {
		setinput({ ...input, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(sendEmail({ input, history: props.history }));
	};
	return (
		<div className="creds-container">
			<div className="welcome-message">
				<h1>Forgot Password</h1>
				<p>
					Enter your email address and we will send you instructions
					to reset your password.
				</p>
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						type="text"
						name="cred_value"
						value={input.cred_value}
						onChange={handleChange}
					/>
					<button type="submit">Request Password</button>
				</form>
			</div>
		</div>
	);
};

export default EmailRequest;
