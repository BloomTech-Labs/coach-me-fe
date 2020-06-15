import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard";
import ConditionCard from "./ConditionCard";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClientInfo } from "../../../redux/actions/clientActions";
import "../../../sass/dashboard/client/clientDashboard.scss";

const ClientDashboard = (props) => {
	const [goals] = useState([
		{"started": "6/8/20", "title": "Exercise More", "description": "I will walk 5,000 steps 4 days this week", "completed": true},
		{"started": "6/15/20", "title": "Exercise More", "description": "I will wall 8,000 steps 4 days this week.", "completed": false},
		{"started": "6/22/20", "title": "Eat Healthier", "description": "I will eat 2 servings of vegetables 4 days this week.", "completed": true},
	]);
	const [conditions] = useState([ "Diabetes" , "HBP", "Anxiety", "High Cholesterol" ])
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClientInfo());
	}, []);

	return (
		<div className="client-dashboard">
			<div className="tabs-container">
				<div className="notifications">
					<Link className="tab top" to="client-notifications">Notifications</Link>
					<div className="notification-count">5</div>
				</div>
				<Link className="tab" to="resource-center">Resource Center</Link>
				<Link className="tab" to="coach-messages">Coach Messages</Link>
				<Link className="tab" to="track-progess">Track Progress</Link>
			</div>
			<div className="info-container">
				<div className="profile-container">
					<div className="profile">
						{<h1>{props.state.first_name} {props.state.last_name}</h1>}
						{conditions.map((c, index) => {
							return <ConditionCard key={index} condition={c} /> 
						})}
					</div>
					<div className="motivation">
						<p>Motivation: client's motivation for coming to the app {/*{motivation}*/}</p>
					</div>
					<h2>Goals:</h2>
						{goals.map((g, index) => {
								return <GoalCard key={index} goal={g} />
						})} 	
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data, 
		loggedIn: state.client.loggedIn
	};
};

export default connect(mapStateToProps)(ClientDashboard);
