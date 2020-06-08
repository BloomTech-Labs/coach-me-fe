import React from "react";
import moment from "moment";
import "../../../../../sass/dashboard/coach/coach_metric_view/metrics.scss";
import iconbloodPressure from "../../../../utils/assets/bloodPressure.svg";

const BPhistory = (props) => {
	return (
		<div className="metric-history">
			<div className="metric-history-header">
				<h2 className="history-title">Blood Pressure History</h2>
				<button
					className="view-all"
					onClick={() => props.setShowBPhistory(true)}
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
								alt="Blood Pressure Icon"
								src={iconbloodPressure}
							></img>
						</div>
						<h3 className="metric-name">Blood Pressure</h3>
					</div>

					<h4 className="metric-date">
						{moment(record.date).format("LLL")}
					</h4>

					<div className="metric-value-container">
						<h4 className="metric-value">
							{record["Blood_pressure_over"]
								? record["Blood_pressure_over"] +
								  "/" +
								  record["Blood_pressure_under"]
								: "N/A"}
						</h4>
						<h4 className="metric-unit">mmHg</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default BPhistory;
