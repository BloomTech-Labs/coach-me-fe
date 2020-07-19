import React, { useState } from "react";
import { useSelector } from "react-redux";
import GoalForm from "./GoalForm";
import GoalsDisplay from "./GoalsDisplay";
import Backdrop from "../../../../utils/UI/Backdrop";
import "../../../../sass/dashboard/coach/goals/goalContainer.scss";

const GoalsContainer = (props) => {
    const state = useSelector((state) => state.coach.selectedClient);
    const [showModal, setShowModal] = useState(false);

    return (
        <div data-testid="goal-container" className={props.showInfo ? "goals-div" : "hidden"}>
            <h1 data-testid="clients-name" className="client-name">{state.first_name}'s Profile</h1>
            {showModal ?
            <div>
                {/* <Backdrop show={showModal} set={setShowModal} /> */}
                <GoalForm setShowModal={setShowModal} showModal={showModal} />
            </div>
            :
            <div></div> 
            }
            <GoalsDisplay />
            <button onClick={() => setShowModal(true)}>Create Goal</button>
        </div>
    )
}

export default GoalsContainer;
