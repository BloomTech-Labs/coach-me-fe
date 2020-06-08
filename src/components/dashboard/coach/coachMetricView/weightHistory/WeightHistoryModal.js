import React from "react";

import moment from "moment";

import "../metrics.scss";
import iconweight from "../../../../../utils/assets/icons/weight.svg";
import Xicon from "../../../../../utils/assets/icons/Xicon.svg";

const WeightHistoryModal = (props) => {
	if (props.showWeightHistory) {
		return (
			<div className="metric-modal-container">
				<div className="metric-history-modal">
					<img
						className="x"
						alt="X"
						src={Xicon}
						onClick={() => props.setShowWeightHistory(false)}
					></img>
					<h2 className="history-modal-title">Weight History</h2>
					{props.reverseClientData.map((record, index) => (
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
									{record["Weight"]
										? record["Weight"]
										: "N/A"}
								</h4>
								<h4 className="metric-unit">lbs</h4>
							</div>
						</div>
					))}
					<button onClick={() => props.setShowWeightHistory(false)}>
						Close
					</button>
				</div>
			</div>
		);
	}
	return null;
};

export default WeightHistoryModal;
