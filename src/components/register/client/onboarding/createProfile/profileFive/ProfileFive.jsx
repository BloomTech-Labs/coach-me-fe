import React from "react";
import { Link } from "react-router-dom";

import Weekdays from "./Weekdays";
import Weekends from "./Weekends";

import "../../../../../../sass/register/client/create_profile/profile_five/profileFive.scss";

const ProfileFive = (props) => {
	return (
		<div>
			<div className="header">
				<div>
					<h4 data-testid="title" className="title">
						When are you usually available?
					</h4>
				</div>
			</div>
			<div data-testid="scheduling" className="scheduling">
				<p data-testid="help-text" className="help-text">
					As part of Coach Me you'll regularly chat with your coach.
					Select what time(s) work best for you.
				</p>
				<h4 className="heading">Weekdays</h4>
				<Weekdays />
				<h4 className="heading">WeekEnds</h4>
				<Weekends />
			</div>
			<div className="timezone">
				<h4 className="heading">Time Zone</h4>
				<select
					data-testid="zone-select"
					className="zone-select"
					name="time-zone"
				>
					<option val="">Select Your timezone...</option>
					<option value="Hawaii">Hawaii</option>
					<option value="Pacific">Pacific</option>
					<option value="Mountain">Mountain</option>
					<option value="Central">Central</option>
					<option value="Eastern">Eastern</option>
				</select>
			</div>
			{/* TIMEZONE */}
			<div className="next">
				<Link to="/createProfile6">
					<i className="fas fa-chevron-right"></i>
				</Link>
			</div>
		</div>
	);
};

export default ProfileFive;
