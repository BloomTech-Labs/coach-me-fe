import React, { useState, useEffect } from "react";
import "../../../sass/dashboard/coach/coachDashboard.scss";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCoach } from "../../../redux/actions/authActions";
import ClientInfo from "./clientsList/ClientInfo/ClientInfo";
import SearchForm from "./SearchForm";
import Metrics from "./coachMetricView/Metrics";
import GoalsDisplay from "./goals/GoalsDisplay";
import CoachNotificationCenter from "./notificationCenter/CoachNotificationCenter.jsx";

import "react-perfect-scrollbar/dist/css/styles.css";
import { getClientList } from "../../../redux/actions/coachActions";

const CoachDashboard = (props) => {
	const [clientprofile, setclientprofile] = useState();
	const state = useSelector((state) => state.coach.data);
	const currentCoachID = state.id;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoach());
	}, []);

	useEffect(() => {
		if (currentCoachID) {
			dispatch(getClientList(currentCoachID));
		}
	}, [currentCoachID]);

	return (
		<>
			<div className="coachdashboard-container">
				<div className="clientlist-container">
					<SearchForm
						coachID={props.state.id}
						clientLIST={props.spiderman.coach.clientList}
					/>
				</div>
				<div className="clientinfo-container">
					<ClientInfo clientprofile={clientprofile} />
					<h4 className="coach-name">
						Welcome, {props.state.first_name}
					</h4>
					<GoalsDisplay clientprofile={clientprofile} />
					<Metrics clientprofile={clientprofile} />
				</div>
				<CoachNotificationCenter />
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.coach.data,
		spiderman: state,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(CoachDashboard);
