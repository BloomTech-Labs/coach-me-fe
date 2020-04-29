import React from 'react';
import './healthGoal.scss';

const HealthGoal = (props) => {
    return (
        <div className={props.selected ? 'goal-selected': 'goal'}
        onClick={() =>props.selectGoal(props.id)}>
            <p className="goal-text">{props.text}</p>
        </div>
    );
}

export default HealthGoal;
