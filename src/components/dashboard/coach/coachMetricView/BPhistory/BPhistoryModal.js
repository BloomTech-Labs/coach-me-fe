import React from "react";
import moment from "moment";
import "../metrics.scss";
import iconbloodPressure from "../../../../../utils/assets/icons/bloodPressure.svg";
import Xicon from "../../../../../utils/assets/icons/Xicon.svg";

const BPhistoryModal = (props) => {
	if (props.showBPhistory) {
		return (
			<div className="metric-modal-container">
				<div className="metric-history-modal">
					<img
						className="x"
						alt="X"
						src={Xicon}
						onClick={() => props.setShowBPhistory(false)}
					></img>
					<h2 className="history-modal-title">
						Blood Pressure History
					</h2>
					{props.reverseClientData.map((record, index) => (
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
					<button onClick={() => props.setShowBPhistory(false)}>
						Close
					</button>
				</div>
			</div>
		);
	}
	return null;
};

export default BPhistoryModal;
