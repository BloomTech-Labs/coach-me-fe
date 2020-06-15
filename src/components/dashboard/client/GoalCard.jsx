import React from "react";
import "../../../sass/dashboard/client/goalCard.scss";

const GoalCard = (props) => {
    return (
        <div className="goal-card" >
            <div className="completed-pic">
                <img src="" alt="pic"/>
            </div>
            <div className="goal-info">
            <p>Start Date: {props.goal.started}</p>
            <h2>Goal: {props.goal.title}</h2>
            <p>{props.goal.description}</p>
            </div>
        </div>
    )
}

export default GoalCard;