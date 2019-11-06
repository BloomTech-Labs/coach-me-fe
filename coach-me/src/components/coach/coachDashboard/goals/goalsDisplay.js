import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGoals } from '../../../../actions/coachActions';
import GoalsDisplayModal from './GoalDisplayModal';
import GoalCard from './GoalCard';

const GoalsDisplay = props => {
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();

    const { clientprofile } = props;

    useEffect(() => {
        if (clientprofile && clientprofile.clientId) {
            dispatch(getGoals(clientprofile.clientId));
        }
    }, [clientprofile]);

    console.log('GoalsDisplay Component State', state);
    console.log('GoalsDisplay Component props', props);
    return (
        <div>
            <h1>I am the GoalsDisplay Component</h1>
            <GoalCard />
            <GoalsDisplayModal />
        </div>
    );
};

export default GoalsDisplay;
