import React, { useState, useEffect } from "react";
import GoalCard from "./GoalCard";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClientInfo, getMyCoach, getClientGoals } from "../../../redux/actions/clientActions";
import ImageCircle from './imageUpload/ImageCircle';
import "../../../sass/dashboard/client/clientDashboard.scss";
import Calendar from './Calendar';
import UpcomingSessions from './UpcomingSessions';
const ClientDashboard = (props) => {
	
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClientInfo());
		
	}, [props.state.coach_id]);
	useEffect(() => {
		if(props.state.coach_id){
			dispatch(getMyCoach(props.state.coach_id))
			dispatch(getClientGoals(props.state.coach_id, props.state.id))
		}
	
	}, [props.state.coach_id]);

	return (
		<div className="client-dashboard">
		
			<div className="info-container">
				<div className="profile-container">
					<ImageCircle />
					{props.state.coach_id ? <h4 className='my-coach'>Your coach is: {props.coach.first_name} {props.coach.last_name}</h4> : <h4>You dont have a coach yet.</h4> }
						
						<p className="motivation">Motivation: client's motivation for coming to the app</p>
					<div className="goals-container">
						<h2>Goals:</h2>
						{props.goals.length ? props.goals.map((g, index) => {
							return <GoalCard key={index} goal={g} />
						}): <h4>You Have no goals.</h4>} 	
					</div>
				</div>
			<div className="calendar-section">
				{props.state.id ? <UpcomingSessions></UpcomingSessions> : ''}
				{props.state.coach ? <Calendar calendlyLink={props.state.calendly_url}/> : ''}
			</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data, 
		loggedIn: state.client.loggedIn,
		coach: state.client.myCoach,
		goals: state.client.myGoals
	};
};

export default connect(mapStateToProps)(ClientDashboard);