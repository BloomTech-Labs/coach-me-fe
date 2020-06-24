import React, { useState, useEffect } from "react";
import "../../../sass/dashboard/coach/coachDashboard.scss";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCoach } from "../../../redux/actions/authActions";
import ClientInfo from "./clientsList/ClientInfo/ClientInfo";
import SearchForm from "./SearchForm";
import CoachMessaging from "./notificationCenter/coachMessaging/CoachMessaging";
import Metrics from "./coachMetricView/Metrics";
import GoalsDisplay from "./goals/GoalsDisplay";
import CoachNotificationCenter from "./notificationCenter/CoachNotificationCenter.jsx";

import "react-perfect-scrollbar/dist/css/styles.css";
import { getClientList } from "../../../redux/actions/coachActions";

const CoachDashboard = (props) => {
	console.log("CoachDashboard props", props);
	const [clientprofile, setclientprofile] = useState();

	const [listOfClients, setListOfClients] = useState();
	const [coachProfile, setCoachProfile] = useState();
	const state = useSelector((state) => state.coach.data);
	const spiderman = useSelector((state) => state.coach.clientList);
	// console.log("clientList", clientList);
	// console.log("Dashboard state", state.id);
	// console.log("props.state.id",props.state.id)
	const currentCoachID = state.id;
	const clientListArray = props.spiderman.coach.clientList;
	console.log("clientListArray", clientListArray);
	// console.log("currentCoachID", currentCoachID);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCoach());
	}, []);

	useEffect(() => {
		// console.log("currentCoachID inside useEffect #1", currentCoachID);
		dispatch(getClientList(currentCoachID));

		// console.log("currentCoachID inside useEffect #2", currentCoachID);
	}, [currentCoachID]);

	// console.log("clientList", clientList);
	console.log("listOfClients", listOfClients);
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
						Welcome,
						{props.state.first_name}
					</h4>
					<GoalsDisplay clientprofile={clientprofile} />
					<Metrics clientprofile={clientprofile} />
				</div>
				<CoachNotificationCenter />
				{/* <div className="coach-messaging">
					<CoachMessaging clientprofile={clientprofile} />
				</div> */}

				<div className="testdiv">
					{/* {props.spiderman.coach.clientList.map((n, index) => {
						return (
							<div className="card" key={index}>
								<p>client name: {n.first_name}</p>
							</div>
						);
					})} */}
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	console.log("CoachDashboard State", state);
	return {
		state: state.coach.data,
		spiderman: state,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(CoachDashboard);
