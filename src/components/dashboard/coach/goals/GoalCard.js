import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Backdrop from "../../../../utils/UI/Backdrop";
import GoalCardModal from "./GoalCardModal";
import Check from "../../../../utils/assets/icons/green-check.png";
import X from "../../../../utils/assets/icons/red-x.png";
import { getSelectedClientGoal } from "../../../../redux/actions/coachActions";
import "../../../../sass/dashboard/client/goalCard.scss";

const GoalCard = (props) => {
    const dispatch = useDispatch();
	const [status] = useState(props.goal.completed);
	const [showCardModal, setShowCardModal] = useState(false);

    return (
        <div className="goal-card" onClick={() => {
            setShowCardModal(true)
            dispatch(getSelectedClientGoal(props.goal))}}
        >
            {showCardModal ?
            <div>
                <Backdrop show={showCardModal} set={setShowCardModal} />
                <GoalCardModal showCardModal={showCardModal} status={status} />
            </div>
            :
            <div>
                <div className="icon-container">
                    <img className="goal-icon" src={status?Check:X} alt="icon"/>
                </div>
                <div className="goal-info">
                    <div className="goal-start">
                        <p>Started: {props.goal.started}</p>
                    </div>
                <h2>{props.goal.title}</h2>
                <p>{props.goal.description}</p>
                </div>
            </div>
            }
        </div>
	);
};

export default GoalCard;
