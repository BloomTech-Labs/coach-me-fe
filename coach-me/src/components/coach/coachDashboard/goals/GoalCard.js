import React, { useState } from 'react';
import './goalCard.scss';
import moment from 'moment';
import { ReactComponent as Arrow } from '../assets/Vector.svg';
import { ReactComponent as ArrowDown } from '../assets/Arrow-down.svg';
import { ReactComponent as GreenCheck } from '../assets/greenCheckMark.svg';
import { ReactComponent as RedX } from '../assets/redX.svg';

const GoalCard = props => {
    // console.log('GoalCards', props);

    const [show, setShow] = useState(false);
    const toggleGoal = e => {
        setShow(!show);
    };

    let goalMet;
    let goalResponse;
    if (props.metGoal === 'Yes') {
        goalMet = <GreenCheck />;
        goalResponse = <p style={{ color: '#47b881' }}>Met Goal</p>;
    } else {
        goalMet = <RedX />;
        goalResponse = <p style={{ color: '#FD6C79' }}>Didn't Meet Goal</p>;
    }
    let goalNotes;
    if (props.notes !== undefined) {
        goalNotes = props.notes;
    }

    let arrow;
    if (show === false) {
        arrow = <Arrow />;
    } else {
        arrow = <ArrowDown />;
    }

    // console.log('goalNotes', goalNotes);
    return (
        <div className='goal-text-container'>
            <div className='goal-mas'>
                <div className='goalMet'>{goalMet}</div>
                <p>{goalResponse}</p>
            </div>
            <div className='text-container'>
                <div className='start-date'>
                    Start Date: {moment(props.startDate).format('MMM Do')}
                </div>
                <div className='goal-text'>
                    <p>{props.goal}</p>
                </div>
            </div>
            <div className='arrow' onClick={() => toggleGoal(show)}>
                {arrow}
            </div>
        </div>
    );
};

export default GoalCard;
