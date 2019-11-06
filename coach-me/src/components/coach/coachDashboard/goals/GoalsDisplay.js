import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoals } from '../../../../actions/coachActions';
import GoalDisplayModal from './GoalDisplayModal';
import GoalCard from './GoalCard';
import './goalsDisplay.scss';

const GoalsDisplay = props => {
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const { clientprofile } = props;

    useEffect(() => {
        if (clientprofile && clientprofile.clientId) {
            dispatch(getGoals(clientprofile.clientId));
        }
    }, [clientprofile]);

    const toggleModal = e => {
        setShow(!show);
    };

    // console.log('GoalsDisplay Component State', state);
    // console.log('GoalsDisplay Component props', props);

    let goalKeys;
    if (Object.keys(state.clientGoals)) {
        goalKeys = [...state.clientGoals];
    }
    // goalKeys = goalKeys.find(e => e.goal);
    console.log('goalKeys', goalKeys);

    return (
        <div onClick={() => toggleModal()} className='goals-wrapper'>
            <button onClick={() => toggleModal()}>view all</button>
            {goalKeys.map((goal, i) => (
                <div className='goal-box'>
                    <GoalCard
                        key={i}
                        goal={goal.goal}
                        startDate={goal.startDate}
                    />
                </div>
            ))}
            <GoalDisplayModal
                toggleModal={toggleModal}
                goals={goalKeys}
                show={show}
            />
        </div>
    );
};

export default GoalsDisplay;
