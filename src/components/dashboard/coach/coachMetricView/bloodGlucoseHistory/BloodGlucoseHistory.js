import React from "react";
import moment from "moment";
import "../../../../../sass/dashboard/coach/coach_metric_view/metrics.scss";
import iconfastingBloodGlucose from "../../../../../utils/assets/icons/Blood.svg";

const BloodGlucoseHistory = (props) => {
	return (
		<div className="metric-history">
			<div className="metric-history-header">
				<h2 className="history-title">Blood Glucose History</h2>
				<button
					className="view-all"
					onClick={() => props.setShowGlucoseHistory(true)}
				>
					View all
				</button>
			</div>
			{props.reverseClientData.slice(0, 2).map((record, index) => (
				<div className="health-card" key={index}>
					<div className="metric-type">
						<div className="metric-icon">
							<img
								className="icon"
								alt="Blood Gluscose Icon"
								src={iconfastingBloodGlucose}
							></img>
						</div>
						<h3 className="metric-name">Blood Glucose</h3>
					</div>

					<h4 className="metric-date">
						{moment(record.date).format("LLL")}
					</h4>

					<div className="metric-value-container">
						<h4 className="metric-value">
							{record["Blood_sugar"]
								? record["Blood_sugar"]
								: "N/A"}
						</h4>
						<h4 className="metric-unit">mg/dl</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default BloodGlucoseHistory;
