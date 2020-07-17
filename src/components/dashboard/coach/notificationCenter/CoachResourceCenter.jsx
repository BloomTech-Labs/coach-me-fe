import React from "react";
import "../../../../sass/dashboard/coach/coachDashboard.scss";
import "../../../../sass/dashboard/coach/notificationCenter/coachResourceCenter.scss";

const CoachResourceCenter = (props) => {
	console.log("CoachResourceCenter");
	return (
		<div data-testid="coach-resources" className="coach-resource-center-container">
			<h1>Coach Resource Center</h1>
		</div>
	);
};

export default CoachResourceCenter;
