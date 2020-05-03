import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './profileThree.scss';

const ProfileThree = () => {

    const [joiningOptions,setJoiningOptions] = useState([
        {
            id:0,
            text: 'On My Own.',
            selected: false,
        },
        {
            id:1,
            text: 'Through my employer.',
            selected: false,
        },
        {
            id:2,
            text: 'Through health insurance.',
            selected: false,
        },
    ])

    const [conditions, setConditions] = useState([
        {
            id: 0,
            text: 'Anxiety',
            selected: false,
        },
        {
            id: 1,
            text: 'Diabetes',
            selected: false,
        },
        {
            id: 2,
            text: 'High Blood Pressure',
            selected: false,
        },
        {
            id: 3,
            text: 'High Cholesterol',
            selected: false,
        }
    ])

    const selectOption = id => {
    
        setJoiningOptions(joiningOptions.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }))
      }

      const selectCondition = id => {
        setConditions(conditions.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        })) 
      }

    return (
        <div className='profile-three'>
            <header>
            <Link to='/createProfile1'><i className="fas fa-chevron-left"></i></Link>
                <h4>We'll need a little bit of information to get started.</h4>
            </header>
            <div className="joining-options">
            <h4>Are you joining Coach Me on your own or an organization, such as your employer or health insurance?</h4>
                {joiningOptions.map(option => {
                    return(
                        <div>
                            <button 
                            className={option.selected ? 'option-selected' : 'option'}
                            id={option.id}
                            onClick={()=>selectOption(option.id)}
                            >{option.text}</button>
                        </div>
                    )
                })}
            </div>
            {/* JOINING OPTIONS */}
            <div className="conditions-query">
                <h4>Do you have any of the following conditions?</h4>
                <div className="conditions">
                    {conditions.map(condition => {
                        return (
                            <button 
                            className={condition.selected ? 'option-selected' : 'option'}
                            id={condition.id}
                            onClick={()=>selectCondition(condition.id)}
                            >{condition.text}</button>
                        )
                    })}

                </div>
            </div>
            <Link to='/createProfile4'><i className="fas fa-chevron-right"></i></Link>
        </div>
        // PROFILE THREE
    );
}

export default ProfileThree;
