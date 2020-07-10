import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClientGoals } from "../../../../redux/actions/coachActions";
import "../../../../sass/dashboard/coach/goals/goalForm.scss";

const GoalForm = (props) => {
    const [goal, setGoal] = useState({ start_date:"", title:"", description:"", completed: false})
    const state = useSelector((state) => state.coach.data);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setGoal({ ...goal, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(addClientGoals(state.id, CLIENTID, goal))
    };
    
    return (
        <div className={props.showModal ? "goal-form" : "closed"}>
            <h1>New Client Goal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="date"
                placeholder="start-date"
                value={goal.start_date}
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="title"
                value={goal.title}
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="description"
                value={goal.description}
                onChange={handleChange}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default GoalForm;