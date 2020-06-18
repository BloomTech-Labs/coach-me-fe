import React from "react";
import { Link } from "react-router-dom";

import "../../../../sass/dashboard/coach/coachDashboard.scss";

const Notifications = (props) => {
	return (
		<div className="wrapper">
			<div className="tabs-container">
				<div className="notifications">
					<Link className="tab top" to="/coach-notifications">
						Notifications
					</Link>
					<div className="notification-count">5</div>
				</div>
				<Link className="tab" to="/coach-resource-center">
					Resource Center
				</Link>
				<Link className="tab" to="/coach-messages">
					Coach Messages
				</Link>
				<Link className="tab" to="">
					Track Progress
				</Link>
			</div>
		</div>
	);
};

export default Notifications;
