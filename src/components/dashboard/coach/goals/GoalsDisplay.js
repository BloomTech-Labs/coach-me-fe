import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GoalCard from "./GoalCard";
// import { getClientGoals } from '../../../../actions/coachActions';
import "../../../../sass/dashboard/coach/goals/goalsDisplay.scss";

const GoalsDisplay = (props) => {
	const dispatch = useDispatch();

	// const [show, setShow] = useState(false);

	useEffect(() => {
		// dispatch(getClientGoals());
	}, []);

	// const toggleModal = (e) => {
	// 	setShow(!show);
	// };

	
	return (
		<div className="goals-wrapper">
			{props.clientList
				.map((goal, index) => (
						<GoalCard key={index}
							goal={goal}
						/>
				))}
		</div>
	);
};

export default GoalsDisplay;
