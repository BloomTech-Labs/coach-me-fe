import React from 'react';
import GoalCard from './GoalCard';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
                    <PerfectScrollbar>
                        {goals.map((goal, i) => (
                            <div className='goal-box'>
                                <GoalCard key={i} goal={goal.goal} />
                            </div>
                        ))}
                    </PerfectScrollbar>
                    <button
                        className='modal-button'
                        onClick={() => toggleModal(show)}
                    >
                        close
                    </button>
                </div>
            </div>
        );
    }
    return null;
};

export default GoalDisplayModal;
