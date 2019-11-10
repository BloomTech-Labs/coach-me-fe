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
        // if (props.showAll) {
        //     setShow(props.showAll);
        // }
    };
    // const toggleAllGoals = e => {
    //     setShow(props.showAll);
    // };

    let goalMet;
    let goalResponse;
    if (props.metGoal === 'Yes') {
        goalMet = <GreenCheck className='green-check' />;
        goalResponse = <p style={{ color: '#47b881' }}>Met Goal</p>;
    } else {
        goalMet = <RedX className='red-x' />;
        goalResponse = <p style={{ color: '#FD6C79' }}>Didn't Meet Goal</p>;
    }

    let notes;
    let goalNotes;
    if (props.notes !== undefined && show !== false) {
        goalNotes = props.notes;
        notes = <p>Notes:</p>;
    }

    let arrow;
    if (show === false) {
        arrow = <ArrowDown />;
    } else {
        arrow = <Arrow />;
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
                <div
                    className={`goal-notes ${!show ? 'hidden' : 'not-hidden'}`}
                >
                    <p>{notes}</p>
                    <br />
                    <p>{goalNotes}</p>
                </div>
            </div>
            <div className='arrow' onClick={() => toggleGoal(show)}>
                {arrow}
            </div>
        </div>
    );
};

export default GoalCard;
