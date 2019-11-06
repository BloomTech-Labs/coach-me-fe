import React from 'react';
import './goalCard.scss';
import moment from 'moment';
const GoalCard = props => {
    console.log('GoalCards', props.goal);
    return (
        <div className='text-container'>
            <p>Start Date: {moment(props.startDate).format('MMM Do')}</p>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
