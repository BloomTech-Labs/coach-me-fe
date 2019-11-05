import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMessageHistory,
    postMessage
} from '../../../../actions/coachActions';
import './coachMessaging.scss';


function LiveMessages(props) {
    console.log(props);
    const { clientprofile } = props;
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [message, setMessage] = useState({
        message: '',
        Phone: ''
    });

    console.log('LiveMessages State', state);
    console.log('state.coach', state.coach);

    useEffect(() => {
        if (clientprofile && clientprofile.clientPhone) {
            dispatch(getMessageHistory(clientprofile.clientPhone));
            setMessage({ ...message, Phone: clientprofile.clientPhone });
        }
    }, [clientprofile]);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                getMessageHistory(clientprofile && clientprofile.clientPhone)
            );
        }, 1000);
        return () => clearInterval(interval);
    }, [clientprofile]);

    const handleInputChange = e => {
        setMessage({ ...message, message: e.target.value });
    };

    const submitNewMessage = e => {
        e.preventDefault();
        {
            dispatch(postMessage(message));
        }
        setMessage({ ...message, message: '' });
    };
    return (
        <>
            {/* contains get request twilio data */}

            <div className='message-container'>
                {state.coach.messageHistory &&
                    state.coach.messageHistory.map((m, i) => (
                        <div
                            key={i}
                            className={`messages ${
                                m.direction === 'inbound' ? 'left' : 'right'
                            }`}
                        >
                            <p className='text'>{m.body}</p>
                            <p className='time'>{m.dateSent}</p>
                        </div>
                    ))}
            </div>
            <form className='text-input' onSubmit={submitNewMessage}>
                <textarea
                    rows='4'
                    cols='50'
                    onChange={handleInputChange}
                    value={message.message}
                    type='text'
                    placeholder='Type your message here'
                ></textarea>
                <button>Send</button>
            </form>
        </>
    );
}

export default LiveMessages;
