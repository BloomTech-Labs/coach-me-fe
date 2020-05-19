import React from 'react';
import './timeSlot.scss';

const Timeslot = (props) => {
    return (
        <div className={props.selected ? 'time-slot-selected' : 'time-slot'}
        onClick={()=>props.selectTimeWeekday(props.id)}>
            <p className='text'>{props.text}</p>
        </div>
    );
}

export default Timeslot;
