import React from "react"
import Check from "../../../../utils/assets/icons/green-check.png";
import X from "../../../../utils/assets/icons/red-x.png";
import "../../../../sass/dashboard/coach/goals/goalCardModal.scss";
// import { getClientGoal } from "../../../../redux/actions/coachActions";

const GoalCardModal = (props) => {
    console.log("gcm", props)
    return (
        <div className={props.showCardModal ? "goal-modal" : "hidden"}>
            <div className="icon-container">
                <img className="goal-icon" src={props.status?Check:X} alt="icon"/>
            </div>
            <div className="goal-info">
                <div className="goal-start">
                    Started:
                    {/* <p>Started: {props.goal.started}</p> */}
                </div>
                <h2>Title</h2>
                <p>description</p>
            {/* <h2>{props.goal.title}</h2> */}
            {/* <p>{props.goal.description}</p> */}
            </div>
        </div>
    )
}

export default GoalCardModal;