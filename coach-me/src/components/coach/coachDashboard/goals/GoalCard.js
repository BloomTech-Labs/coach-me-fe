import React from 'react';
import './goalCard.scss';
import moment from 'moment';
const GoalCard = props => {
    // console.log('GoalCards', props.goal);
    return (
        <div className='text-container'>
            <h6>Start Date: {moment(props.startDate).format('MMM Do')}</h6>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
