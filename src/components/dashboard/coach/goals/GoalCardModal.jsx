import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Check from '../../../../utils/assets/icons/green-check.png';
import X from '../../../../utils/assets/icons/red-x.png';
import {
    getClientGoal,
    updateClientGoal,
    deleteClientGoal,
} from '../../../../redux/actions/coachActions';
import EditGoalForm from './EditGoalForm';
import '../../../../sass/dashboard/coach/goals/goalCardModal.scss';

const GoalCardModal = (props) => {
    const state = useSelector((state) => state.coach);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editGoal, setEditGoal] = useState({
        ...state.selectedGoal,
    });

    const handleChange = (e) => {
        setEditGoal({ ...editGoal, [e.target.name]: e.target.value });

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateClientGoal(
                state.data.id,
                state.selectedClient.id,
                state.selectedGoal.id,
                editGoal
            )
        );
        props.set(false);
    };
    useEffect(() => {
        dispatch(
            getClientGoal(
                state.data.id,
                state.selectedClient.id,
                state.selectedGoal.id
            )
        );
    }, [state.selectedClient.id]);

    return (
        <div
            data-testid="goalcard-modal"
            className={props.showCardModal ? 'modal' : 'hidden'}
        >
            {editMode ? (
                <div data-testid="edit-modal" className="edit-modal">
                    {editMode}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setEditMode(!editMode);
                        }}
                    >
                        Back
                    </button>
                    <h1>Edit Goal</h1>
                    <EditGoalForm
                        goal={state.selectedGoal}
                        editGoal={editGoal}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            ) : (
                <div data-testid="goal-modal" className="goal-modal">
                    <div data-testid="icon-section" className="icon-container">
                        <img
                            data-testid="icon"
                            className="goal-icon"
                            src={props.status ? Check : X}
                            alt="icon"
                        />
                    </div>
                    <div data-testid="info" className="goal-info">
                        <div>
                            <p data-testid="start-date">
                                Started: {state.selectedGoal.start_date}
                            </p>
                            <h2 data-testid="title">
                                {state.selectedGoal.title}
                            </h2>
                            <p data-testid="description">
                                {state.selectedGoal.description}
                            </p>
                        </div>
                        <div data-testid="buttons" className="buttons">
                            <button
                                type="button"
                                className="edit"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setEditMode(true);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="delete"
                                onClick={() => {
                                    dispatch(
                                        deleteClientGoal(
                                            state.data.id,
                                            state.selectedClient.id,
                                            state.selectedGoal.id
                                        )
                                    );
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GoalCardModal;
