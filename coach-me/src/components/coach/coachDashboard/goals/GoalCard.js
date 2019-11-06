import React from 'react';
import './goalCard.scss';
const GoalCard = props => {
    console.log('GoalCards', props.goal);
    return (
        <div className='text-container'>
            <p>Start Date: {props.startDate}</p>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
