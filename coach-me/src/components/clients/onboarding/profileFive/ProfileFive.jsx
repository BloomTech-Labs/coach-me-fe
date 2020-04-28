import React,{ useState } from 'react';
import  { Link } from 'react-router-dom';

import ProfileFour from '../profileFour/ProfileFour';
import Timeslot from './Timeslot';

import './profileFive.scss';


const ProfileFive = () => {
//   Created these for dummy data, i assume it will be brought in from the backend later
    const [schedule, setSchedule] = useState({
        weekdays: [
            {
                id: 0,
                text: '6-10 am',
                selected: true,
            },
            {
                id: 1,
                text: '10-12pm',
                selected: false,
            },
            {
                id: 2,
                text: '12-2 pm',
                selected: false,
            },
            {
                id: 3,
                text: '2-4 pm',
                selected: false,
            },
        ],
        weekends: [
            {
                id: 0,
                text: '6-10 am',
                selected: false,
            },
            {
                id: 1,
                text: '10-12pm',
                selected: false,
            },
            {
                id: 2,
                text: '12-2 pm',
                selected: false,
            },
            {
                id: 3,
                text: '2-4 pm',
                selected: false,
            },
        ]

    })


    const selectTimeWeekday = id => {
    
        setSchedule(schedule.weekdays.map(item => {
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
            <Link to='/createProfile4'><i className="fas fa-chevron-left"></i></Link>
            
                <h4 className='title'>When are you usually available?</h4>
            </div>
        </div>
        <div className="scheduling">
            <p className='help-text'>As part of Coach Me you'll regularly chat with your coach. Select what time(s) work best for you.</p>
            <h4 className='heading'>Weekdays</h4>
            <div className="weekdays time-slots">
            
                {
                   schedule.weekdays && schedule.weekdays.map(item => {
                        
                        return (
                            <Timeslot
                            id={item.id}
                            text={item.text}
                            selected={item.selected}
                            selectTimeWeekday={selectTimeWeekday} 
                            />
                        )
                    })
                }
            </div>
            <h4 className='heading'>WeekEnds</h4>
            <div className="weekends time-slots">
            
            {
                  schedule.weekends &&  schedule.weekends.map(item => {
                        return (
                            <Timeslot
                            id={item.id}
                            text={item.text} 
                            />
                        )
                    })
                }
            </div>
        </div>
        {/* SCHEDULING */}

        <div className="timezone">
            <h4 className="heading">Time Zone</h4>
            <select className='zone-select' name="time-zone" >
                <option value="Hawaii">Hawaii</option>
                <option value="Pacific">Pacific</option>
                <option value="Mountain">Mountain</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                
            </select>
        </div>
        {/* TIMEZONE */}
        
        <div className="next">
        <i className="fas fa-chevron-right"></i>
        </div>
    </div>
    );
}

export default ProfileFive;
