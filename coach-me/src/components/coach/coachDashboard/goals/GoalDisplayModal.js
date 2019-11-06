import React from 'react';
import GoalCard from './GoalCard';
import './goalDisplayModal.scss';

const GoalDisplayModal = props => {
    const { goals, toggleModal, show } = props;

    if (show) {
        return (
            <div className='goal-modal-container'>
                <div className='label'>
                    <label>Goals</label>
                </div>
                <div className='goal-container'>
                    {goals.map((goal, i) => (
                        <div className='goal-box'>
                            <GoalCard key={i} goal={goal.goal} />
                        </div>
                    ))}
                </div>
                <button onClick={() => toggleModal(show)}>close</button>
            </div>
        );
    }
    return null;
};

export default GoalDisplayModal;
