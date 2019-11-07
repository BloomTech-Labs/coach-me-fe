import React from 'react';
import './goalCard.scss';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheveronUp,
    faCheveronDown
} from '@fortawesome/free-solid-svg-icons';

const GoalCard = props => {
    // console.log('GoalCards', props.goal);
    return (
        <div className='text-container'>
            <h6>Start Date: {moment(props.startDate).format('MMM Do')}</h6>
            <>
                Met Goal? <input type='checkbox' checked='checked'></input>
            </>
            <div className='arrow collapsed'>
                {/* <FontAwesomeIcon icon={faCheveronUp} />
                <FontAwesomeIcon icon={faCheveronDown} /> */}
            </div>
            <p>{props.goal}</p>
        </div>
    );
};

export default GoalCard;
