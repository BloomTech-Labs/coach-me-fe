import React from "react";
import { Link } from "react-router-dom";

import "../../../../sass/dashboard/coach/coachDashboard.scss";
import "../../../../sass/dashboard/coach/notificationCenter/coachNotificationCenter.scss";

const CoachNotificationCenter = (props) => {
	return (
		<div className="wrapper">
			<div className="tabs-container">
				<Link className="tab" to="/coach-resource-center">
					Resource Center
				</Link>
				<Link className="tab" to="/coach-messages">
					Coach Messages
				</Link>
				<Link className="tab" to="/chat">
					Video Chat
				</Link>
			</div>
		</div>
	);
};

export default CoachNotificationCenter;
