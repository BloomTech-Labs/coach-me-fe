import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoals } from '../../../../actions/coachActions';
import GoalsDisplayModal from './GoalDisplayModal';
// import GoalCard from './GoalCard';

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
        <div className='goal-wrapper'>
            <GoalsDisplayModal toggleModal={toggleModal} goals={goalKeys} />
            <button onClick={() => toggleModal()}>...all Goals</button>
        </div>
    );
};

export default GoalsDisplay;
