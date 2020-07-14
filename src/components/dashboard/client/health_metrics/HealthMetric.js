import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";


//Component Imports
import HealthMetricCards from "./HealthMetricCards";
import LineGraph from "./LineGraph";

//Styling
import "../../../../sass/dashboard/client/health_metrics/healthMetrics.scss";

// Icon Imports
import iconfastingBloodGlucose from "../../../../utils/assets/icons/Blood.svg";
import iconbloodPressure from "../../../../utils/assets/icons/bloodPressure.svg";
import iconweight from "../../../../utils/assets/icons/weight.svg";

const HealthMetric = (props) => {
	const state = useSelector((state) => state.client);
	const dispatch = useDispatch();
	const clientData = [...state.clientMetrics];

	clientData.sort((a, b) => {
		return Date.parse(a.fields.Date_time) - Date.parse(b.fields.Date_time);
	});

	// Following state controls the history toggle functionality:
	const [toggleHistory, setToggleHistory] = useState(false);

	// used to convert the labels and heading of the HealthMetricCard component into either one of the three metrics.
	const [historyLabel, setHistoryLabel] = useState("");
	const [historyScale, setHistoryScale] = useState("");
	const [historyFilter, setHistoryFilter] = useState("");

	// useEffect(() => {
	//     dispatch(getClientRecords());
	// }, []);

	const handleClick = (heading, label, filter, filter2) => {
		window.scrollTo(0, 0);
		setHistoryFilter("");
		setToggleHistory(true);
		setHistoryLabel(heading);
		setHistoryScale(label);
		if (filter2) {
			setHistoryFilter([filter, filter2]);
		} else {
			setHistoryFilter(filter);
		}
		props.history.push("/metrics/history");
	};

	//Data reshaped for chartjs used in <LineGraph />

	const datesArray = clientData.map((date) => {
		return moment(date.fields.Date_time).format("MMM Do");
	});
	const bloodSugarArray = clientData.map((value) => {
		return value.fields.Blood_sugar;
	});
	const weightArray = clientData.map((value) => {
		return value.fields.Weight;
	});
	const bpOverArray = clientData.map((value) => {
		return value.fields.Blood_pressure_over;
	});
	const bpUnderArray = clientData.map((value) => {
		return value.fields.Blood_pressure_under;
	});

	return (
		<>
			<Route
				path="/metrics/history"
				render={(props) => (
					<HealthMetricCards
						{...props}
						historyLabel={historyLabel}
						historyScale={historyScale}
						historyFilter={historyFilter}
						setToggleHistory={setToggleHistory}
						clientData={clientData}
					/>
				)}
			/>

			<div className="metric-container">
				<h1>Metrics</h1>
			
				<div className="metric-values">
					<div className="health-value">
						<div className="metric">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Blood Gluscose Icon"
									src={iconfastingBloodGlucose}
								></img>
							</div>
						
						</div>
						<LineGraph
							values={bloodSugarArray}
							datesArray={datesArray}
							metricType={"bloodGlucose"}
						/>
				
					</div>

					<div className="health-value">
						<div className="metric">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Weight Icon"
									src={iconweight}
								></img>
							</div>
						
						</div>
						<LineGraph
							values={weightArray}
							datesArray={datesArray}
							metricType={"weight"}
						/>
					
					</div>
					<div className="health-value">
						<div className="metric">
							<div className="metric-icon">
								<img
									className="icon"
									alt="Blood Pressure Icon"
									src={iconbloodPressure}
								></img>
							</div>
						
						</div>
						<LineGraph
							bpOverArray={bpOverArray}
							bpUnderArray={bpUnderArray}
							datesArray={datesArray}
							metricType={"bloodPressure"}
						/>
					
					</div>
				</div>
			</div>
		</>
	);
};

export default HealthMetric;
