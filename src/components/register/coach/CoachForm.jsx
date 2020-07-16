import React from "react";
import "../../../sass/register/coach/coachForm.scss";

const CoachForm = (props) => {
	return (
		<form data-testid="coach-form"  onSubmit={props.handleSubmit}>
			<div data-testid="first-name" className="labels">
				<h1>Personal Information</h1>
				<p>First Name:</p>

				<input
					type="text"
					required
					name="first_name"
					placeholder="First Name"
					value={props.coachCredentials.first_name}
					onChange={props.handleChange}
				/>
			</div>

			<div data-testid="last-name" className="labels">
				<p>Last Name:</p>
				<input
					type="text"
					required
					name="last_name"
					placeholder="Last Name"
					onChange={props.handleChange}
					value={props.coachCredentials.last_name}
				/>
			</div>

			<div className="labels">
				<h1>Account Settings</h1>
				<p>Email:</p>
				<input
					type="email"
					required
					name="email"
					placeholder="E-Mail"
					onChange={props.handleChange}
					value={props.coachCredentials.email}
				/>
			</div>

			<div className="labels">
				<p>Phone:</p>
				<input
					type="text"
					required
					placeholder="Phone"
					name="phone"
					onChange={props.handleChange}
					value={props.coachCredentials.phone}
				/>
			</div>
			{/* <input 
                    type="date"
                    required
                    name='dob'
                    value={props.coachCredentials.dob}
                    onChange={props.handleChange}
                /> */}

			<div className="labels">
				<p>Password:</p>
				<input
					type="password"
					required
					name="password"
					placeholder="Password"
					// pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
					required
					onChange={props.handleChange}
					value={props.coachCredentials.password}
				/>
			</div>

			<p className="subtext">
				A valid password must have a minimum of 8 characters, include a
				number, and a special character or symbol.
			</p>

			<div className="labels">
				<p>Confirm Password:</p>
				<input
					type="password"
					required
					name="confirm_password"
					placeholder="Confirm Password"
					// pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
					required
					onChange={props.handleChange}
					value={props.coachCredentials.confirm_password}
				/>
			</div>
			{/* <input 
                    type="text"
                    name='height'
                    placeholder='Height*'
                    value={props.coachCredentials.height}
                    onChange={props.handleChange}
                /> */}
			{/* <input 
                    type="text"
                    required
                    name='sex'
                    placeholder='Sex*'
                    value={props.coachCredentials.sex}
                    onChange={props.handleChange}
                /> */}
			<button>Sign Up!</button>
		</form>
	);
};
export default CoachForm;
