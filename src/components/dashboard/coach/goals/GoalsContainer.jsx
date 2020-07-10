import React, { useState } from "react";
import GoalForm from "./GoalForm";
import GoalsDisplay from "./GoalsDisplay";
import Backdrop from "../../../../utils/UI/Backdrop";
import "../../../../sass/dashboard/coach/goals/goalContainer.scss";

const GoalsContainer = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className={props.showInfo ? "goals-div" : "hidden"}>
            <button onClick={() => setShowModal(true)}>Create Goal</button>
            <Backdrop show={showModal} set={setShowModal} />
            <GoalForm showModal={showModal} />
            <GoalsDisplay clientList={props.clientLIST}/>
        </div>
    )
}

export default GoalsContainer;