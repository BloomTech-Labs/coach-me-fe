import React from "react";
import moment from "moment";
import "../metrics.scss";
import iconfastingBloodGlucose from "../../../../../utils/assets/icons/Blood.svg";
import Xicon from "../../../../../utils/assets/icons/Xicon.svg";

const BloodGlucoseHistoryModal = (props) => {
	if (props.showGlucoseHistory) {
		return (
			<div className="metric-modal-container">
				<div className="metric-history-modal">
					<img
						className="x"
						alt="X"
						src={Xicon}
						onClick={() => props.setShowGlucoseHistory(false)}
					></img>
					<h2 className="history-modal-title">
						Blood Glucose History
					</h2>
					{props.reverseClientData.map((record, index) => (
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
					<button onClick={() => props.setShowGlucoseHistory(false)}>
						Close
					</button>
				</div>
			</div>
		);
	}
	return null;
};

export default BloodGlucoseHistoryModal;
