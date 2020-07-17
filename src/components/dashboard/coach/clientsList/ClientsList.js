import React,{useEffect} from "react";
import {connect,useDispatch, useSelector} from 'react-redux';
import SearchForm from "../SearchForm";
import { get } from "jquery";

const dispatch = useDispatch();
const currentCoachID = props.state.id;
const state = useSelector((state) => state.coach.data);
const clientList = useSelector((state) => state.coach.clientList);
useEffect(() => {
	dispatch(getCoach)
	
},[])
useEffect(() => {
	console.log(currentCoachID)
},[currentCoachID])

const ClientsList = (props) => {
	return (
		<div>
			<SearchForm setClient={props.setClient} />
			<h4>You currently have no clients</h4>
		</div>
	);
};
const mapStateToProps = (state) => {
	// console.log("CoachDashboard State", state);
	return {
		state: state.coach.data,
		clientList: state.coach.clientList,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(ClientsList);
