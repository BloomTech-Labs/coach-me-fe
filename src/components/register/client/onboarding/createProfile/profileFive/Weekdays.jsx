import React,{ useState } from 'react';
import Timeslot from './Timeslot';

const Weekdays = () => {

    const [weekdaySchedule, setWeekdaySchedule] = useState(
        [
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
    )
    const selectTimeWeekday = id => {
        setWeekdaySchedule(weekdaySchedule.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }
        ))
      }
    return (
        <div className="weekdays time-slots">
            {weekdaySchedule && weekdaySchedule.map((item, i) => {
                    
                    return (
                        <Timeslot
                        id={item.id}
                        key={i}
                        text={item.text}
                        selected={item.selected}
                        selectTimeWeekday={selectTimeWeekday} 
                        />
                    )})}
        </div>
    );
}

export default Weekdays;
