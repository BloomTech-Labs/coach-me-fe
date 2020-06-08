import React, { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "../../../../../../utils/UI/Backdrop";
import CompleteModal from "./CompleteModal";

import "../../../../../../sass/register/client/create_profile/profile_six/profileSix.scss";

import randomLady from "../../../../../../utils/assets/img/random-lady.jpg";
const ProfileSix = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="profile-six">
			<Backdrop show={showModal} set={setShowModal} />
			<CompleteModal showModal={showModal} setShowModal={setShowModal} />

			<header>
				<div className="user-image">
					<img src={randomLady} alt="" />
					<h4>Almost done!</h4>
				</div>
			</header>
			<div className="confirmation">
				<p>
					This program offers a bridge between where you are and where
					you want to be.
				</p>

				<p>
					You'll work closely with a personal health coach to identify
					your wellness vision. You'll set specific goals for healthy
					habits, such as excercising, nutrition, or managing a
					condition. You will visit regularly with your coach to help
					you stick to your plan and meet your goals!
				</p>

				<ul>
					<li>16 week proven program.</li>
					<li>Weekly consultations with your Coach</li>
					<li>A personalized Wellness Plan</li>
					<li>Tips to help you stay on track.</li>
				</ul>
			</div>
			{/* CONFIRMATION */}
			<button className="continue" onClick={() => setShowModal(true)}>
				Confirm
			</button>
		</div>
		// PROFILE SIX
	);
};

export default ProfileSix;
