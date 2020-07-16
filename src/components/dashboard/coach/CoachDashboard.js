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

	const [clientprofile, setclientprofile] = useState();
	const [listOfClients, setListOfClients] = useState();
	const [coachProfile, setCoachProfile] = useState();
	const [showInfo, setShowInfo] = useState(false);

	const state = useSelector((state) => state.coach.data);
	const spiderman = useSelector((state) => state.coach.clientList);
	const dispatch = useDispatch();

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
				
				<div data-testid="clientlist" className="clientlist-container">
					<SearchForm 
						showInfo={showInfo}
						setShowInfo={setShowInfo}
						coachID={props.state.id}
						clientLIST={props.spiderman.coach.clientList}
					/>
				</div>
					<h4 className="coach-name">
						Welcome, 
						{props.state.first_name} {props.state.last_name}
					</h4>
					<GoalsDisplay clientprofile={clientprofile} />
					<Metrics clientprofile={clientprofile} />
=======
				<div data-testid="clientinfo" className="clientinfo-container">
						<h4 data-testid="coach-name" className="coach-name">
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
				<div data-testid="notifications">
					<CoachNotificationCenter />
				</div>
			</div>
		</>
	);
};

const mapStateToProps = (state) => {

	return {
		state: state.coach.data,
		spiderman: state,
		clientList: state.coach.clientList,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(CoachDashboard);
