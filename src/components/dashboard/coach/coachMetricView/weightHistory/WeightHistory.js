import React from "react";

import moment from "moment";

import "../../../../../sass/dashboard/coach/coach_metric_view/metrics.scss";
import iconweight from "../../../../../utils/assets/icons/weight.svg";

const WeightHistory = (props) => {
	return (
		<div className="metric-history">
			<div className="metric-history-header">
				<h2 className="history-title">Weight History</h2>
				<button
					className="view-all"
					onClick={() => props.setShowWeightHistory(true)}
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
								alt="Weight Icon"
								src={iconweight}
							></img>
						</div>
						<h3 className="metric-name">Weight</h3>
					</div>

					<h4 className="metric-date">
						{moment(record.date).format("LLL")}
					</h4>

					<div className="metric-value-container">
						<h4 className="metric-value">
							{record["Weight"] ? record["Weight"] : "N/A"}
						</h4>
						<h4 className="metric-unit">lbs</h4>
					</div>
				</div>
			))}
		</div>
	);
};

export default WeightHistory;
