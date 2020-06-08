import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as Logo } from "../../../utils/assets/logo/logo.svg";
import Show from "../../../utils/assets/icons/login/assets/show_password.png";
import Hide from "../../../utils/assets/icons/login/hide_password.png";
import { getClientInfoRegister } from "../../../redux/actions/clientActions";
import { Link } from "react-router-dom";
import "../../../sass/login/client/loginClient.scss";

const RegisterClient = (props) => {
	const dispatch = useDispatch();
	const [input, setinput] = useState({ email: "", password: "" });
	const [hidden, setHidden] = useState(true);
	const [source, setSource] = useState(Show);
	const handleClick = () => {
		if (hidden == false) {
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
		dispatch(getClientInfoRegister({ input, history: props.history }));
	};
	return (
		<div className="creds-container">
			<div className="img-container">
				<a href="https://www.coachmehealth.org" alt="logo">
					<Logo />
				</a>
				<p>Signup</p>
			</div>
			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<label>Email</label>
					<input
						type="text"
						name="email"
						value={input.email}
						onChange={handleChange}
					/>
					<label>Password</label>
					<div className="password-container">
						<input
							type={hidden ? "password" : "text"}
							name="password"
							value={input.password}
							onChange={handleChange}
						/>
						<img
							className="eye"
							onClick={handleClick}
							src={source}
							alt="eye"
						/>
					</div>
					<button type="submit">Sign up</button>
				</form>
				<div className="social-links">
					<a className="fb">Facebook</a>
					{/* <a className="go">Google</a> */}
				</div>
				<p>
					Already have an account?<Link to="/">Login</Link>
				</p>
			</div>
		</div>
	);
};

export default RegisterClient;
