import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [showCoachLogin, setshowCoachLogin] = useState(false);
	const clickHandler = () => {
		setshowCoachLogin(!showCoachLogin);
	};
	return (
		<div data-testid="login-div">
			<div data-testid="buttons" className="buttons">
				<p className="speak-to-rep">
					If you'd like more information{" "}
					{/* Google is used below just as a placeholder */}
					<a href="https://www.google.com">
						Speak to a representative
					</a>{" "}
					to learn more! If you're ready to get started, use the
					buttons below!{" "}
				</p>
				<div
					className={
						showCoachLogin
							? "clients-buttons hide"
							: "clients-buttons button-box"
					}
				>
					<div className="login-buttons-candc">
						<Link to="/client-login">
							<button>Log in</button>
						</Link>
						<Link to="/createAccount">
							<button>Sign up</button>
						</Link>
					</div>

					<p className="coach-toggle" onClick={clickHandler}>
						Show me Coach options.
					</p>
				</div>
				<div
					className={
						showCoachLogin
							? "coaches-buttons button-box"
							: "coaches-buttons hide"
					}
				>
					<div className="login-button">
						<Link to="/coach-login">
							<button>Log in as Coach</button>
						</Link>
						<Link to="/coach-register">
							<button>Apply to be a Coach</button>
						</Link>
					</div>

					<p className="coach-toggle" onClick={clickHandler}>
						Show me Client options.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
