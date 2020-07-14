import React, { useState } from "react";
import GoalForm from "./GoalForm";
import GoalsDisplay from "./GoalsDisplay";
import Backdrop from "../../../../utils/UI/Backdrop";
import "../../../../sass/dashboard/coach/goals/goalContainer.scss";

const GoalsContainer = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={props.showInfo ? "goals-div" : "hidden"}>
            <Backdrop show={showModal} set={setShowModal} />
            <GoalForm showModal={showModal} />
            <GoalsDisplay/>
            <button onClick={() => setShowModal(true)}>Create Goal</button>
        </div>
    )
}

export default GoalsContainer;