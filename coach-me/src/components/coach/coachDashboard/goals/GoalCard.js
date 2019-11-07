import React from 'react';

const GoalCard = props => {
    console.log('GoalCards', props);
    return <div>{props.goal}</div>;
};

export default GoalCard;
