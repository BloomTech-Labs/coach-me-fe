import React from 'react';
import './goalCard.scss';
const GoalCard = props => {
    // console.log('GoalCards', props);
    return (
        <div className='text-container'>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
