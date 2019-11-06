import React from 'react';
import GoalCard from './GoalCard';

const GoalDisplayModal = props => {
    const { goals, toggleModal, show } = props;
    return (
        <div className='goal-modal-container'>
            <h1>Goals</h1>
            {goals.map((goal, i) => (
                <div className='goal-box'>
                    <GoalCard key={i} goal={goal.goal} />
                </div>
            ))}
            <button onClick={() => toggleModal(show)}>close</button>
        </div>
    );
};

export default GoalDisplayModal;
