import React,{ useState } from 'react';

const GoalSelect = () => {

    const [healthGoals,setHealthGoals] = useState([
        {
            id: 0,
            text: 'Losing Weight',
            selected: false
        },
        {
            id: 1,
            text: 'Improve Nutrition',
            selected: false
        },
        {
            id: 2,
            text: 'Boost Excercise',
            selected: false
        },
        {
            id: 3,
            text: 'Manage Stress',
            selected: false
        },
        {
            id: 4,
            text: 'Get Better Sleep',
            selected: false
        },
        {
            id: 5,
            text: 'Control My Conditions',
            selected: false
        },
        {
            id: 6,
            text: 'Quit Smoking',
            selected: false
        },
        {
            id: 7,
            text: 'Something Else',
            selected: false
        }
    ])
    return (
        <div>
            
        </div>
    );
}

export default GoalSelect;
