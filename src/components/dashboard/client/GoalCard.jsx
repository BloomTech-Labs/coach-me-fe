import React, { useState } from "react";
import Check from "../../../utils/assets/icons/green-check.png";
import X from "../../../utils/assets/icons/red-x.png";
import "../../../sass/dashboard/client/goalCard.scss";

const GoalCard = (props) => {
    const [status] = useState(props.goal.completed);
    return (
        <div className="goal-card" >
            <div className="icon-container">
                <img className="goal-icon" src={status?Check:X} alt="icon"/>
            </div>
            <div className="goal-info">
                <div className="goal-start">
                    <p>Started: {new Intl.DateTimeFormat('en-US').format(new Date(props.goal.start_date))}</p>
                </div>
            <h2>{props.goal.title}</h2>
            <p>{props.goal.description}</p>
            </div>
        </div>
    )
}

export default GoalCard;