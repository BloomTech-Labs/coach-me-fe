import React from 'react';

const GoalCard = props => {
    console.log('GoalCard', props);
    return <div>{props.goal}</div>;
};

export default GoalCard;
