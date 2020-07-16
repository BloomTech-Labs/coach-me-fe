import React from "react";
import moment from "moment";


//Component Imports
import LineGraph from "./LineGraph";

//Styling
import "../../../../sass/dashboard/client/health_metrics/healthMetrics.scss";

//Icon Imports
import iconfastingBloodGlucose from "../../../../utils/assets/icons/Blood.svg";
import iconbloodPressure from "../../../../utils/assets/icons/bloodPressure.svg";
import iconweight from "../../../../utils/assets/icons/weight.svg";
import iconback from "../../../../utils/assets/icons/back.svg";

function HealthMetricCards(props) {
	const handleClick = () => {
		props.history.push("/metrics");
	};

	//Data reshaped for chartjs used in <LineGraph />
	const datesArray = props.clientData.map((date) => {
		return moment(date.fields.Date_time).format("MMM Do");
	});
	const bloodSugarArray = props.clientData.map((value) => {
		return value.fields.Blood_sugar;
	});
	const weightArray = props.clientData.map((value) => {
		return value.fields.Weight;
	});
	const bpOverArray = props.clientData.map((value) => {
		return value.fields.Blood_pressure_over;
	});
	const bpUnderArray = props.clientData.map((value) => {
		return value.fields.Blood_pressure_under;
	});
	const reverseClientData = [...props.clientData];
	reverseClientData.reverse();

	//-----------------Blood Pressure (over/under)
	if (typeof props.historyFilter === "object") {
		return (
			<div className="metric-container">
				<div className="back-btn-container">
					<div className="back-button" onClick={() => handleClick()}>
						<div className="icon-back">
							<img
								className="icon"
								alt="Back Arrow"
								src={iconback}
							></img>
						</div>
						
					</div>
				</div>
				
				<LineGraph
					bpOverArray={bpOverArray}
					bpUnderArray={bpUnderArray}
					datesArray={datesArray}
					metricType={"bloodPressure"}
				/>
				<div className="health-cards-container">
					{reverseClientData.map((record, index) => (
						<div className="health-card">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Blood Pressure Icon"
									src={iconbloodPressure}
								></img>
							</div>
							<div className="health-label">
								
								<h4>
									{moment(record.fields.Date_time).format(
										"MMM Do YYYY"
									)}
								</h4>
							</div>
							<div className="health-metric-value">
								<h4 className="health-value">
									{record.fields[props.historyFilter[0]]
										? record.fields[
												props.historyFilter[0]
										  ] +
										  "/" +
										  record.fields[props.historyFilter[1]]
										: "N/A"}
								</h4>
								<h4 className="health-scale">
									{props.historyScale}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	//-----------------Fasting Blood Glucose (Blood Sugar)
	if (props.historyFilter === "Blood_sugar") {
		return (
			<div className="metric-container">
				<div className="back-btn-container">
					<div className="back-button" onClick={() => handleClick()}>
						<div className="icon-back">
							<img
								className="icon"
								alt="Back Arrow"
								src={iconback}
							></img>
						</div>
						
					</div>
				</div>


				<LineGraph
					values={bloodSugarArray}
					datesArray={datesArray}
					metricType={"bloodGlucose"}
				/>

				<div className="health-cards-container">
					{reverseClientData.map((record, index) => (
						<div className="health-card">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Blood Gluscose Icon"
									src={iconfastingBloodGlucose}
								></img>
							</div>
							<div className="health-label">
								
								<h4>
									{moment(record.fields.Date_time).format(
										"MMM Do YYYY"
									)}
								</h4>
							</div>
							<div className="health-metric-value">
								<h4 className="health-value">
									{record.fields[props.historyFilter]
										? record.fields[props.historyFilter]
										: "N/A"}
								</h4>
								<h4 className="health-scale">
									{props.historyScale}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	//-----------------Weight
	if (props.historyFilter === "Weight") {
		return (
			<div className="metric-container">
				<div className="back-btn-container">
					<div className="back-button" onClick={() => handleClick()}>
						<div className="icon-back">
							<img
								className="icon"
								alt="Back Arrow"
								src={iconback}
							></img>
						</div>
						
					</div>
				</div>
			

				<LineGraph
					values={weightArray}
					datesArray={datesArray}
					metricType={"weight"}
				/>

				<div className="health-cards-container">
					{reverseClientData.map((record, index) => (
						<div className="health-card">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Weight Icon"
									src={iconweight}
								></img>
							</div>
							<div className="health-label">
								
								<h4>
									{moment(record.fields.Date_time).format(
										"MMM Do YYYY"
									)}
								</h4>
							</div>
							<div className="health-metric-value">
								<h4 className="health-value">
									{record.fields[props.historyFilter]
										? record.fields[props.historyFilter]
										: "N/A"}
								</h4>
								<h4 className="health-scale">
									{props.historyScale}
								</h4>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default HealthMetricCards;
