import React from 'react';
import GoalCard from './GoalCard';

const GoalDisplayModal = props => {
    const { goals } = props;
    return (
        <div className='goal-card'>
            <h1>Goals</h1>
            {goals.map((goal, i) => (
                <GoalCard key={i} goal={goal.goal} />
            ))}
        </div>
    );
};

export default GoalDisplayModal;
