import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import Check from "../../../../utils/assets/icons/green-check.png";
import X from "../../../../utils/assets/icons/red-x.png";
import "../../../../sass/dashboard/coach/goals/goalCardModal.scss";
import { getClientGoal, updateClientGoal, deleteClientGoal } from "../../../../redux/actions/coachActions";

const GoalCardModal = (props) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editGoal, setEditGoal] = useState({ start_date:"", title:"", description:"", completed: false})

    const handleClick = () => {
        setEditMode(!editMode)
    }
    const handleChange = (e) => {
        console.log("called")
        setEditGoal({ ...editGoal, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(updateClientGoal(state.id, CLIENTID, GOALID, editGoal))
    }

    useEffect(() => {
		// dispatch(getClientGoal(state.id, ,CLIENTID, GOALID));
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
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="title"
                value={editGoal.title}
                onChange={handleChange}
                />
                 <input 
                type="text"
                placeholder="description"
                value={editGoal.description}
                onChange={handleChange}
                />
                <button type="submit" onClick={handleClick}>Edit</button>
            </form>
        </div>
    :
        <div className={props.showCardModal ? "goal-modal" : "hidden"}>
            <div className="goal-info">
                <img className="goal-icon" src={props.status?Check:X} alt="icon"/>
                <p> Started:{/* <p>Started: {props.goal.started}</p> */} </p>
                <h2>Title:{/* <h2>{props.goal.title}</h2> */}</h2>
                <p>description:{/* <p>{props.goal.description}</p> */}</p>
            </div>
            <div>
                <button className="edit" onClick={handleClick}>Edit</button>
                <button className="delete" onClick={() => {{/*dispatch(deleteClientGoal(state.id, CLIENTID, GOALID))*/}}}>Delete</button>
            </div>
        </div>
    }
    </div>
    )
}

export default GoalCardModal;