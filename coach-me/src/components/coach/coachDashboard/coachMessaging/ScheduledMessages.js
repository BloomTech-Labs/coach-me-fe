import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ScheduledMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [schedule, setSchedule] = useState({
        msg: '',
        min: '',
        hour: '',
        dom: '',
        month: '',
        weekday: '',
        year: '',
        numbers: ''
    });

    const handleInputChange = e => {
        e.preventDefault();
        setSchedule({ ...schedule, [e.target.name]: e.target.value });
    };
    console.log('SCHEDULE', schedule);

    const submitNewMessage = e => {
        e.preventDefault();
        axios
            .post('http://localhost:4000/twilioRoute/schedule', schedule)
            .then(res => {
                console.log(schedule);
            })
            .catch(err => console.log(err));
    };
    return (
        <>
            <div>
                <img></img>
            </div>
            <form onSubmit={submitNewMessage}>
                <textarea
                    rows='4'
                    cols='50'
                    onChange={handleInputChange}
                    value={schedule.msg}
                    name='msg'
                    type='text'
                    placeholder='Type your message here'
                    required
                ></textarea>

                <input
                    type='number'
                    onChange={handleInputChange}
                    name='min'
                    value={schedule.min}
                    placeholder='Enter Minutes'
                />
                <input
                    type='number'
                    onChange={handleInputChange}
                    name='hour'
                    value={schedule.hour}
                    placeholder='Enter Hour in Military Time'
                />
                <input
                    type='number'
                    onChange={handleInputChange}
                    name='dom'
                    value={schedule.dom}
                    placeholder='Enter Day of Month'
                />
                <input
                    onChange={handleInputChange}
                    name='month'
                    value={schedule.month}
                    placeholder='Enter Month'
                />
                <input
                    onChange={handleInputChange}
                    name='weekday'
                    value={schedule.weekday}
                    placeholder='Enter Weekday'
                />
                <input
                    type='number'
                    onChange={handleInputChange}
                    name='year'
                    value={schedule.year}
                    placeholder='Enter Year'
                />
                <input
                    onChange={handleInputChange}
                    name='numbers'
                    value={[schedule.numbers]}
                    placeholder='Enter Phone Numbers Seperated by Comma'
                    required
                />
                <button>Submit</button>
            </form>
        </>
    );
}

export default ScheduledMessages;
