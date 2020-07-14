import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClientGoal } from "../../../../redux/actions/coachActions";
import "../../../../sass/dashboard/coach/goals/goalForm.scss";

const GoalForm = (props) => {
    const [goal, setGoal] = useState({ start_date:"", title:"", description:"", completed: false})
    const state = useSelector((state) => state.coach);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value)
        setGoal({ ...goal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addClientGoal(state.data.id, state.selectedClient.id, goal))
    };

    return (
        <div className={props.showModal ? "goal-form" : "closed"}>
            <h1>New Client Goal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="date"
                placeholder="start-date"
                name="start_date"
                value={goal.start_date}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="title"
                name="title"
                value={goal.title}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="description"
                name="description"
                value={goal.description}
                onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default GoalForm;