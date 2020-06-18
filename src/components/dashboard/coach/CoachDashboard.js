import React, { useState, useEffect } from "react";
import "../../../sass/dashboard/coach/coachDashboard.scss";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getClients } from "../../../redux/actions/authActions";
import ClientInfo from "./clientsList/ClientInfo/ClientInfo";
import SearchForm from "./SearchForm";
import CoachMessaging from "./notificationCenter/coachMessaging/CoachMessaging";
import Metrics from "./coachMetricView/Metrics";
import GoalsDisplay from "./goals/GoalsDisplay";
import CoachNotificationCenter from "./notificationCenter/CoachNotificationCenter.jsx";

import "react-perfect-scrollbar/dist/css/styles.css";

const CoachDashboard = (props) => {
	console.log("coach", props);
	const [clientprofile, setclientprofile] = useState();

	const state = useSelector((state) => state.coach);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getClients());
		// setCoachName({...coachName,first: localStorage.getItem('first_name'), last: localStorage.getItem('last_name')})
	}, []);
	return (
		<>
			<div className="coachdashboard-container">
				<div className="clientlist-container">
					<SearchForm />
				</div>
				<div className="clientinfo-container">
					<ClientInfo clientprofile={clientprofile} />
					<h4 className="coach-name">
						Welcome, {props.state.first_name}{" "}
						{props.state.last_name}
					</h4>
					<GoalsDisplay clientprofile={clientprofile} />
					<Metrics clientprofile={clientprofile} />
				</div>
				<CoachNotificationCenter />
				{/* <div className="coach-messaging">
					<CoachMessaging clientprofile={clientprofile} />
				</div> */}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log("CoachDashboard State", state);
	return {
		state: state.coach.data,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(CoachDashboard);
