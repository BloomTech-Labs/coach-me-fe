import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMessageHistory,
    postMessage
} from '../../../../actions/coachActions';
import './coachMessaging.scss';
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

//Needs get request for messages  http://localhost:4000/twilioRoute/messagehistory
//Needs Post request to twilio  http://localhost:4000/twilioRoute/twilio

function LiveMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log('LiveMessages State', state);

    useEffect(() => {
        dispatch(getMessageHistory());
    }, []);

    const handleInputChange = e => {
        // e.preventDefault()
        // [e.target.name]: e.target.value
    };

    const submitNewMessage = e => {
        e.preventDefault();
        if ((state.coach.message && state.phone) !== undefined) {
            dispatch(postMessage(state.coach.creds));
        }
    };

    return (
        <>
            {/* contains get request twilio data */}

            <div className='message-container'>
                {state.coach.messages &&
                    state.coach.messages.map(m => (
                        <div
                            className={`messages ${
                                m.direction === 'inBound' ? 'left' : 'right'
                            }`}
                        >
                            <p>{m.body}</p>
                            <p>{m.dateSent}</p>
                        </div>
                    ))}
            </div>
            <form onSubmit={submitNewMessage}>
                <textarea
                    rows='4'
                    cols='50'
                    onChange={handleInputChange}
                    value={state.coach.creds.message}
                    type='text'
                    placeholder='Type your message here'
                ></textarea>
                <button>Send</button>
            </form>
        </>
    );
}

export default LiveMessages;
