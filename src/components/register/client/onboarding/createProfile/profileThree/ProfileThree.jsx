import React from "react";
import { Link } from "react-router-dom";
import JoiningOptions from "./JoiningOptions";
import Conditions from "./Conditions";
import "../../../../../../sass/register/client/create_profile/profile_three/profileThree.scss";

const ProfileThree = () => {
	return (
		<div className="profile-three">
			<header>
				<h4 data-testid="header-text">
					We'll need a little bit of information to get started.
				</h4>
			</header>
			<JoiningOptions />
			<Conditions />
			{/* JOINING OPTIONS */}
			<Link to="/createProfile4">
				<i className="fas fa-chevron-right"></i>
			</Link>
		</div>
		// PROFILE THREE
	);
};

export default ProfileThree;
