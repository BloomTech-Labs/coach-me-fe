import React from "react";
import "../../../../sass/dashboard/coach/coachDashboard.scss";

const Notifications = (props) => {
	return (
		<div className="wrapper">
			<h1>Notifications</h1>
			<div className="container">
				<div className="tabs-container">
					<p>{`Welcome to the CoachMe App!`}</p>
					<p>{`Here is where you will find notifications about your clients.`}</p>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
