import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalCard from "./GoalCard";
import { getClientGoals } from '../../../../redux/actions/coachActions';
import "../../../../sass/dashboard/coach/goals/goalsDisplay.scss";

const GoalsDisplay = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.coach);

	useEffect(() => {
		// dispatch(getClientGoals(ClientID,state.data.id));
	}, []);
	
	return (
		<div className="goals-wrapper">
			{state.clientList
				.map((goal, index) => (
						<GoalCard key={index}
							goal={goal}
						/>
				))}
		</div>
	);
};

export default GoalsDisplay;