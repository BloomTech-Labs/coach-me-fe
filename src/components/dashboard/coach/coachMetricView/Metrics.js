import React, { useState, useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getClientMetrics } from "../../../../redux/actions/coachActions";
import LineGraph from "../../client/health_metrics/LineGraph";
import "../../../../sass/dashboard/coach/coach_metric_view/metrics.scss";

function Metrics(props) {
	const { clientprofile } = props;
	const state = useSelector((state) => state.coach);
	const dispatch = useDispatch();
	const clientData = [...state.clientMetrics];
	const [showGlucoseHistory, setShowGlucoseHistory] = useState(false);
	const [showWeightHistory, setShowWeightHistory] = useState(false);
	const [showBPhistory, setShowBPhistory] = useState(false);

	clientData.sort((a, b) => {
		return Date.parse(a.date) - Date.parse(b.date);
	});

	useEffect(() => {
		if (clientprofile && clientprofile.clientId) {
			dispatch(getClientMetrics(clientprofile.clientId));
		}
		// eslint-disable-next-line
	}, [clientprofile]);

	//Data reshaped for chartjs used in <LineGraph />
	const datesArray = clientData.map((date) => {
		return moment(date.date).format("MMM Do");
	});
	const bloodSugarArray = clientData.map((value) => {
		return value.Blood_sugar;
	});
	const weightArray = clientData.map((value) => {
		return value.Weight;
	});
	const bpOverArray = clientData.map((value) => {
		return value.Blood_pressure_over;
	});
	const bpUnderArray = clientData.map((value) => {
		return value.Blood_pressure_under;
	});
	const reverseClientData = [...clientData];
	reverseClientData.reverse();
	return (
		<div data-testid="metrics-container" className={props.showInfo ? "metrics-container" : "hidden"}>
			<div className="dash-metric-container">
				<div className="graph-container">
					<h2 className="metric-title">Blood Glucose</h2>
					{!bloodSugarArray.every((value) => value === undefined) ? (
						<div className="graph-size">
							<LineGraph
								values={bloodSugarArray}
								datesArray={datesArray}
								metricType={"bloodGlucose"}
							/>
						</div>
					) : (
						<p>No available data for this metric.</p>
					)}
				</div>
			</div>

			<div className="dash-metric-container">
				<div className="graph-container">
					<h2 className="metric-title">Weight</h2>
					{!weightArray.every((value) => value === undefined) ? (
						<div className="graph-size">
							<LineGraph
								values={weightArray}
								datesArray={datesArray}
								metricType={"weight"}
							/>
						</div>
					) : (
						<p>No available data for this metric.</p>
					)}
				</div>
			</div>

			<div className="dash-metric-container">
				<div className="graph-container">
					<h2 className="metric-title">Blood Pressure</h2>
					{!bpOverArray.every((value) => value === undefined) ? (
						<div className="graph-size">
							<LineGraph
								bpOverArray={bpOverArray}
								bpUnderArray={bpUnderArray}
								datesArray={datesArray}
								metricType={"bloodPressure"}
							/>
						</div>
					) : (
						<p>No available data for this metric.</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default Metrics;
