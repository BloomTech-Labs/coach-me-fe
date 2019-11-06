import React from 'react';
import GoalCard from './GoalCard';
import './GoalDisplayModal.scss';

const GoalDisplayModal = props => {
    const { goals, toggleModal, show } = props;

    if (show) {
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
    }
    return null;
};

export default GoalDisplayModal;
