import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginCoach } from "../../../redux/actions/authActions";
import CoachLoginForm from "./CoachLoginForm";
import SideOne from "../coach/SideOne";



//Styling
import "../../../sass/login/coach/loginCoach.scss";

const LoginCoach = (props) => {
	const [coachCredentials, setCoachCredentials] = useState({
		email: "",
		password: "",
	});
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const triggerModal = () => {
		setModal(true);
	};
	const handleChange = (e) => {
		setCoachCredentials({
			...coachCredentials,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(loginCoach(coachCredentials));
	};
	return (
		<>
			
			<div className="Login-Wrapper">
				<SideOne />
				<div className="side-two">
					<h1>Login</h1>
					<p>Welcome back! Please login to your coach account.</p>
					<CoachLoginForm
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						coachCredentials={coachCredentials}
						triggerModal={triggerModal}
					/>
				</div>
			</div>
		</>
	);
};

export default LoginCoach;
