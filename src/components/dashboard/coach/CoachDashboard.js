import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getCoach } from "../../../redux/actions/authActions";
import { getClientList } from "../../../redux/actions/coachActions";
import SearchForm from "./SearchForm";
import Metrics from "./coachMetricView/Metrics";
import GoalsDisplay from './goals/GoalsDisplay';
import CoachNotificationCenter from "./notificationCenter/CoachNotificationCenter.jsx";

import GoalsContainer from "./goals/GoalsContainer";

import "react-perfect-scrollbar/dist/css/styles.css";

const CoachDashboard = (props) => {
	const [clientprofile, setclientprofile] = useState();
	const [coachProfile, setCoachProfile] = useState();
	const [showInfo, setShowInfo] = useState(false);
	const state = useSelector((state) => state.coach.data);
	const spiderman = useSelector((state) => state.coach.clientList);
	const dispatch = useDispatch();
	
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
						coachID={props.state.coachID}
						clientLIST={props.list}
					/>
				</div>
				

				<div data-testid="clientinfo" className="clientinfo-container">
						<h4 data-testid="coach-name" className="coach-name">
							Welcome, {props.state.first_name} {props.state.last_name}!
						</h4>
						{showInfo ?
						<div>
							<GoalsContainer showInfo={showInfo} />
							<Metrics showInfo={showInfo} />
						</div>
						:
						<div className='nobody'>
								<h4 className='not-a-client'>Select One of Your Clients to see their progress.</h4>
						</div>
					
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
		list: state.coach.clientList,
		loggedIn: state.auth.loggedIn,
	};
};
export default connect(mapStateToProps)(CoachDashboard);
