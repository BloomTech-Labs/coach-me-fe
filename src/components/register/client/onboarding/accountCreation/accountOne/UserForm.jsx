import React from "react";

const UserForm = (props) => {
	return (
		<form>
			<div className="labels">
				<h1>Personal Information</h1>
				<p>First Name:</p>
				<input
					type="text"
					name="first_name"
					placeholder="First Name"
					value={props.userAccountDetails.first_name}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Last Name:</p>
				<input
					type="text"
					name="last_name"
					placeholder="Last Name"
					value={props.userAccountDetails.last_name}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>DOB:</p>
				<input
					type="date"
					name="dob"
					value={props.userAccountDetails.dob}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Height:</p>
				<input
					type="number"
					name="height"
					placeholder="Height*"
					value={props.userAccountDetails.height}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Weight:</p>
				<input
					type="number"
					name="weight"
					placeholder="Weight"
					value={props.userAccountDetails.weight}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Sex:</p>
				
				<select
					type="text"
					name="sex"
					placeholder="Sex*"
					value={props.userAccountDetails.sex}
					onChange={props.changeHandler}
				>
					<option value="male">Male</option>
					<option value="female">Female</option>
				</select>
			</div>

			<div className="labels">
				<p>Gender:</p>
				<input
					type="text"
					name="gender"
					placeholder="Gender"
					value={props.userAccountDetails.gender}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<h1>Account Settings</h1>
				<p>Email:</p>
				<input
					type="text"
					name="email"
					placeholder="Email"
					value={props.userAccountDetails.email}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Phone:</p>
				<input
					type="tel"
					name="phone"
					placeholder="Phone"
					value={props.userAccountDetails.phone}
					onChange={props.changeHandler}
				/>
			</div>

			<div className="labels">
				<p>Password:</p>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={props.userAccountDetails.password}
					onChange={props.changeHandler}
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
					name="confirm_password"
					placeholder="Confirm Password"
					value={props.userAccountDetails.confirm_password}
					onChange={props.changeHandler}
				/>
			</div>

			<button className="continue" onClick={props.handleSubmit}>
				Continue
			</button>
		</form>
	);
};

export default UserForm;
