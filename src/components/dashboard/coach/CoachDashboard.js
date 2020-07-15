import React, { useState, useEffect } from "react";
import "../../../sass/dashboard/coach/coachDashboard.scss";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCoach } from "../../../redux/actions/authActions";
import { getClientList } from "../../../redux/actions/coachActions";
import SearchForm from "./SearchForm";
import GoalsContainer from "./goals/GoalsContainer";
import Metrics from "./coachMetricView/Metrics";
import CoachNotificationCenter from "./notificationCenter/CoachNotificationCenter.jsx";
import "react-perfect-scrollbar/dist/css/styles.css";

const CoachDashboard = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.coach.data);
	const [showInfo, setShowInfo] = useState(false);
	
	useEffect(() => {
		dispatch(getCoach());
	}, []);

	useEffect(() => {
		if (state.id) {
			dispatch(getClientList(state.id));
		}
	}, [state.id]);

	return (
		<>
			<div className="coachdashboard-container">
				
				<div className="clientlist-container">
					<SearchForm 
						showInfo={showInfo}
						setShowInfo={setShowInfo}
						coachID={props.state.id}
						clientLIST={props.spiderman.coach.clientList}
					/>
				</div>
				<div className="clientinfo-container">
						<h4 className="coach-name">
							Welcome,
							{props.state.first_name}
						</h4>
						{showInfo ?
						<div>
							<GoalsContainer 
							showInfo={showInfo}
							/>
							<Metrics 
								showInfo={showInfo} 
							/>
						</div>
						:
						<div></div>
						}
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
