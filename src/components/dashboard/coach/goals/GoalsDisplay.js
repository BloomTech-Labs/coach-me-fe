import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalCard from "./GoalCard";
import { getClientGoals } from "../../../../redux/actions/coachActions";
import "../../../../sass/dashboard/coach/goals/goalsDisplay.scss";

const GoalsDisplay = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.coach);

	useEffect(() => {
		dispatch(getClientGoals(state.data.id, state.selectedClient.id));
	}, [state.selectedClient])

	return (
		<div data-testid="goals" className="goals-wrapper">
			{state.clientGoals
				.map((goal, index) => (
						<GoalCard key={index}
							goal={goal}
						/>
				))}
		</div>
	);
};

export default GoalsDisplay;