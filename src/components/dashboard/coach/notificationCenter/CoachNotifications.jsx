import React from "react";
import "../../../../sass/dashboard/coach/coachDashboard.scss";
import "../../../../sass/dashboard/coach/notificationCenter/coachNotifications.scss";
import CoachNotificationCenter from "./CoachNotificationCenter";

const CoachNotifications = (props) => {
	console.log("CoachNotifications");
	return (
		<div data-testid="coach-notification" className="coach-notification-container">
			<h1>Notifications</h1>
		</div>
	);
};

export default CoachNotifications;
