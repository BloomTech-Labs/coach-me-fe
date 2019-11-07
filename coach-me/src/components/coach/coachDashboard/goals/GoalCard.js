import React from 'react';
import './goalCard.scss';
import moment from 'moment';
import { ReactComponent as Arrow } from '../assets/Vector.svg';
import { ReactComponent as GreenCheck } from '../assets/greenCheckMark.svg';
import { ReactComponent as RedX } from '../assets/redX.svg';

const GoalCard = props => {
    console.log('GoalCards', props);
    let goalMet;
    let goalResponse;
    if (props.metGoal === 'Yes') {
        goalMet = <GreenCheck />;
        goalResponse = <p style={{ color: 'green' }}>Met Goal</p>;
    } else {
        goalMet = <RedX />;
        goalResponse = <p style={{ color: 'red' }}>Didn't Meet Goal</p>;
    }

    if (props.goal === undefined) {
        return null;
    } else {
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
                <div className='arrow'>
                    <Arrow />
                </div>
            </div>
        );
    }
};

export default GoalCard;
