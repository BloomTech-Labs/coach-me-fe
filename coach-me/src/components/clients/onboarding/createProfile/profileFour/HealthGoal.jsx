import React from 'react';
import './healthGoal.scss';

const HealthGoal = (props) => {
    return (
         
            <button className={props.selected ? 'goal-selected': 'goal'}
            onClick={() =>props.selectGoal(props.id)}>{props.text}</button>
        
    );
}

export default HealthGoal;
