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
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }
        ))
      }
    return (
        <div data-testid='weekend-div' className="weekends time-slots">
        {weekendSchedule &&  weekendSchedule.map((item, i) => {
                    return (
                        <TimeslotWeekend
                        id={item.id}
                        key={i}
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
