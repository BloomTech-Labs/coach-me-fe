import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Check from "../../../../utils/assets/icons/green-check.png";
import X from "../../../../utils/assets/icons/red-x.png";
import "../../../../sass/dashboard/coach/goals/goalCardModal.scss";
import { getClientGoal, updateClientGoal, deleteClientGoal } from "../../../../redux/actions/coachActions";

const GoalCardModal = (props) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editGoal, setEditGoal] = useState({ start_date:"", title:"", description:"", completed: false})
    const state = useSelector((state) => state.coach);

    const handleClick = () => {
        setEditMode(!editMode)
    };
    const handleChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick()
        dispatch(updateClientGoal(state.id, state.selectedClient.id, state.selectedGoal.id, editGoal))
    };
    useEffect(() => {
		dispatch(getClientGoal(state.id, state.selectedClient.id, state.selectedGoal.id));
    }, []);

    return (
    <div>
    {editMode ?
        <div className="edit-modal">
            <h1>Edit Goal</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type="date"
                placeholder="start-date"
                value={editGoal.start_date}
                name="start_date"
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="title"
                value={editGoal.title}
                name="title"
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="description"
                value={editGoal.description}
                name="description"
                onChange={handleChange}
                />
                <button type="submit">Edit</button>
            </form>
        </div>
    :
        <div className={props.showCardModal ? "goal-modal" : "hidden"}>
                <div className="icon-container">
                    <img className="goal-icon" src={props.status?Check:X} alt="icon"/>
                </div>
                <div className="goal-info">
                    <p>Started: {state.selectedGoal.start_date}</p>
                    <h2>{state.selectedGoal.title}</h2>
                    <p>{state.selectedGoal.description}</p>
                    <button className="edit" onClick={handleClick}>Edit</button>
                    <button className="delete" onClick={() => {dispatch(deleteClientGoal(state.id, state.selectedClient.id, state.selectedGoal.id))}}>Delete</button>
                </div>
        </div>
    }
    </div>
    )
}

export default GoalCardModal;