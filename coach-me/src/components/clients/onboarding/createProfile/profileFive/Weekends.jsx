import React,{ useState } from 'react';
import TimeslotWeekend from './TimeslotWeekend';

const Weekends = () => {
    const [weekendSchedule, setWeekendSchedule] = useState(
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
    const selectTimeWeekend = id => {
        setWeekendSchedule(weekendSchedule.map(item => {
            console.log(item)
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }
        ))
      }
    return (
        <div className="weekends time-slots">
        {weekendSchedule &&  weekendSchedule.map(item => {
                    return (
                        <TimeslotWeekend
                        id={item.id}
                        text={item.text}
                        selected={item.selected}
                        selectTimeWeekend={selectTimeWeekend} 
                        />
                    )
                })}
        </div>
    );
}

export default Weekends;
