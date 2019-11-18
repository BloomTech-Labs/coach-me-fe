import React, { useState } from 'react';
import GoalCard from './GoalCard';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Xicon from '../../../utils/assets/Xicon.svg';
import './goalDisplayModal.scss';

const GoalDisplayModal = props => {
    const { goals, toggleModal, show } = props;

    const [showAll, setShowAll] = useState(false);

    if (show) {
        return (
            <div className='goal-modal-container'>
                <div className='goal-container'>
                    <img
                        className='modal-button-close'
                        alt='X'
                        src={Xicon}
                        onClick={() => toggleModal(show)}
                    ></img>
                    <div className='modal-label'>
                        <label>Goals</label>
                    </div>
                    {/* <div className='expand-collapse-button'>
                        {showAll ? collapseAll : expandAll}
                    </div> */}
                    <PerfectScrollbar className='scrollbar-container'>
                        {goals
                            .filter(x => x.goal !== undefined)
                            .map((goal, i) => (
                                <div className='goal-box'>
                                    <GoalCard
                                        key={i}
                                        goal={goal.goal}
                                        startDate={goal.startDate}
                                        goalDetails={goal.goalDetails}
                                        metGoal={goal.metGoal}
                                        notes={goal.notes}
                                        followups={goal.followups}
                                        showAll={showAll}
                                        setShowAll={setShowAll}
                                    />
                                </div>
                            ))}
                    </PerfectScrollbar>
                    <button
                        className='modal-button'
                        onClick={() => toggleModal(show)}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }
    return null;
};

export default GoalDisplayModal;
