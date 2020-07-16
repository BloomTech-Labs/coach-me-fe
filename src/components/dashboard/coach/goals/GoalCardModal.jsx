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

    const handleChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.name]: e.target.value })
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateClientGoal(state.data.id, state.selectedClient.id, state.selectedGoal.id, editGoal))
    };
    useEffect(() => {
		dispatch(getClientGoal(state.data.id, state.selectedClient.id, state.selectedGoal.id));
    }, [state.selectedClient.id]);

    return (
    <div data-testid="goalcard-modal" className={props.showCardModal ? "modal" : "hidden"}>
    {editMode ?
        <div data-testid="edit-modal" className="edit-modal">
            <button onClick={() => setEditMode(!editMode)}>Back</button>
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
                <button type="submit">Confirm</button>
            </form>
        </div>
    :
        <div data-testid="goal-modal" className="goal-modal">
                <div data-testid="icon-section" className="icon-container">
                    <img data-testid="icon" className="goal-icon" src={props.status?Check:X} alt="icon"/>
                </div>
                <div data-testid="info" className="goal-info">
                    <div>
                    <p data-testid="start-date">Started: {state.selectedGoal.start_date}</p>
                    <h2 data-testid="title">{state.selectedGoal.title}</h2>
                    <p data-testid="description">{state.selectedGoal.description}</p>
                    </div>
                    <div data-testid="buttons" className="buttons">
                    <button className="edit" onClick={() => setEditMode(!editMode)}>Edit</button>
                    <button className="delete" onClick={() => {dispatch(deleteClientGoal(state.data.id, state.selectedClient.id, state.selectedGoal.id))}}>Delete</button>
                    </div>
                </div>
        </div>
    }
    </div>
    )
}

export default GoalCardModal;