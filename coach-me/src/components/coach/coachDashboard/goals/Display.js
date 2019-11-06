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

    let goalKeys;
    if (Object.keys(state.clientGoals)) {
        goalKeys = [...state.clientGoals];
    }
    // goalKeys = goalKeys.find(e => e.goal);
    console.log('goalKeys', goalKeys);

    return (
        <div className='goal-wrapper'>
            <h1>I am the GoalsDisplay Component</h1>
            <div className='goal-card'>
                {goalKeys.map((goal, i) => (
                    <GoalCard key={i} goal={goal.goal} />
                ))}
            </div>

            <GoalsDisplayModal />
        </div>
    );
};

export default GoalsDisplay;
