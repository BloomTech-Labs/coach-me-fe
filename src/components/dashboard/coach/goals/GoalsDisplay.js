import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getGoals } from '../../../../actions/coachActions';
import GoalDisplayModal from "./GoalDisplayModal";
import GoalCard from "./GoalCard";
import "./goalsDisplay.scss";

const GoalsDisplay = (props) => {
	const state = useSelector((state) => state.coach);
	const dispatch = useDispatch();

	const [show, setShow] = useState(false);
	const { clientprofile } = props;

	useEffect(() => {}, []);

	const toggleModal = (e) => {
		setShow(!show);
	};

	return (
		<div className="goals-wrapper">
			<div className="label"></div>
			{state.clientGoals
				.filter((x) => x.goal !== undefined)
				.map((goal, i) => (
					<div className="goal-wrapper-box">
						<GoalCard
							key={i}
							goal={goal.goal}
							startDate={goal.startDate}
							goalDetails={goal.goalDetails}
							metGoal={goal.metGoal}
							notes={goal.notes}
							followups={goal.followups}
						/>
					</div>
				))}
			<GoalDisplayModal
				toggleModal={toggleModal}
				goals={state.clientGoals}
				show={show}
			/>
		</div>
	);
};

export default GoalsDisplay;
