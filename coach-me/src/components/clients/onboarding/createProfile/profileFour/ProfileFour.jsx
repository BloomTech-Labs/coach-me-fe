import React, {useState} from 'react';
import HealthGoal from './HealthGoal';
import { Link } from 'react-router-dom';
import ProfileFive from '../profileFive/ProfileFive';
import './profileFour.scss';


const ProfileFour = () => {

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

    const selectGoal = id => {
    
        setHealthGoals(healthGoals.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }))
      }
    return (
        <div>
            <div className="header">
                <div>
                    <Link to='/createProfile3'><i className="fas fa-chevron-left"></i></Link>
                
                    <h4 className='title'>What is your main health goal?</h4>
                </div>
                
            </div>
            <div className="goals">
                {healthGoals && healthGoals.map(goal => {
                    return ( 
                        <HealthGoal 
                        id={goal.id}
                        text={goal.text}
                        selected={goal.selected}
                        selectGoal={selectGoal} />
                    )
                })}
            </div>
            <div className="next">
                <Link to='/createProfile5'><i className="fas fa-chevron-right"></i></Link>
            
            </div>
        </div>
    );
}

export default ProfileFour;
