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
        <div className="goal-card" onClick={(e) => {
            setShowCardModal(true);
            dispatch(getSelectedClientGoal(props.goal))}}
        >
            {showCardModal ?
            <div>
                <Backdrop show={showCardModal} set={setShowCardModal} />
                <GoalCardModal set={setShowCardModal} showCardModal={showCardModal} status={status} />
            </div>
            :
            <div data-testid="goalcard">
                <div data-testid="icon-section" className="icon-container">
                    <img data-testid="icon" className="goal-icon" src={status?Check:X} alt="icon"/>
                </div>
                <div data-testid="info" className="goal-info">
                    <div className="goal-start">
                        <p data-testid="start-date" >Started: {props.goal.start_date}</p>
                    </div>
                    <h2 data-testid="title">{props.goal.title}</h2>
                    <p data-testid="description">{props.goal.description}</p>
                </div>
            </div>
            }
        </div>
	);
};

export default GoalCard;
