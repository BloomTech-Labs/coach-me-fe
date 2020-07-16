import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClientInfo, getMyCoach } from "../../../redux/actions/clientActions";
import ImageCircle from './imageUpload/ImageCircle';
import "../../../sass/dashboard/client/clientDashboard.scss";
import Calendar from './Calendar';

const ClientDashboard = (props) => {
	console.log("dashboard props",props)
	const [goals] = useState([
		{"started": "6/8/20", "title": "Exercise More", "description": "I will walk 5,000 steps 4 days this week", "completed": true},
		{"started": "6/15/20", "title": "Exercise More", "description": "I will wall 8,000 steps 4 days this week.", "completed": false},
		{"started": "6/22/20", "title": "Eat Healthier", "description": "I will eat 2 servings of vegetables 4 days this week.", "completed": true},
	]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClientInfo());
		
	}, [props.state.coach_id]);
	useEffect(() => {
		
		dispatch(getMyCoach(props.state.coach_id))
	}, [props.state.coach_id]);
	
	return (
		<div className="client-dashboard">
			<div className="tabs-container">

				<Link className="tab notifications" to="client-notifications"><p>Notifications</p><div className="count">5</div></Link>
				<Link className="tab" to="resource-center">Resources</Link>
				<Link className="tab" to="coach-messages">Messages</Link>
				<Link className="tab" to="metric-form">Health Form</Link>
				<Link className='tab' to='/my-sessions'>My Sessions</Link>

			</div>
			<div className="info-container">
				<div className="profile-container">
					<ImageCircle />
					{props.state.coach_id ? <h4 className='my-coach'>Your coach is: {props.coach.first_name} {props.coach.last_name}</h4> : <h4>You dont have a coach yet.</h4> }
						
						<p className="motivation">Motivation: client's motivation for coming to the app</p>
					<div className="goals-container">
						<h2>Goals:</h2>
						{goals.map((g, index) => {
							return <GoalCard key={index} goal={g} />
						})} 	
					</div>
				</div>
			<div className="calendar-section">
				<Calendar calendlyLink="https://calendly.com/brianetaveras/brian-will-tattoo-your-body" />
			</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data, 
		loggedIn: state.client.loggedIn,
		coach: state.client.myCoach
	};
};

export default connect(mapStateToProps)(ClientDashboard);