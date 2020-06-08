import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../../../../sass/register/client/create_profile/profile_one/profileOne.scss";

const ProfileOne = () => {
	const [userData, setUserData] = useState({
		medications: "",
	});

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<div className="profile-one">
			<header>
				<h4 data-testid="header">
					Let's create your Coach Me profile.
				</h4>
			</header>
			<div data-testid="user-photo" className="user-photo">
				<h4 data-testid="upload-text">Upload a photo</h4>
				<div className="photo">
					<i className="fas fa-camera-retro fa-3x"></i>
				</div>
				<button data-testid="image-button" className="button">
					Choose Image
				</button>
			</div>
			<form>
				<div data-testid="medication-div" className="medication-info">
					<p className="subheading">
						Please list any medications you are taking. If multiple
						please seperate them by commas.
					</p>

					<textarea
						data-testid="medication-field"
						type="text"
						name="medications"
						placeholder=""
						value={userData.medications}
						onChange={handleChange}
					/>
				</div>
			</form>
			<Link to="/createProfile3">
				<i className="fas fa-chevron-right"></i>
			</Link>
		</div>
	);
};

export default ProfileOne;
