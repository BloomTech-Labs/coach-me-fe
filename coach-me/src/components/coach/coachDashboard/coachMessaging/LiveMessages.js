import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getMessageHistory,
    postMessage
} from '../../../../actions/coachActions';
import './coachMessaging.scss';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

function LiveMessages(props) {
    console.log(props);
    const { clientprofile } = props;
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [message, setMessage] = useState({
        message: '',
        Phone: ''
    });

    useEffect(() => {
        if (clientprofile) {
            dispatch(getMessageHistory(clientprofile.clientPhone));
            setMessage({ ...message, Phone: clientprofile.clientPhone });
        }
    }, [clientprofile]);

    useEffect(() => {
        if (clientprofile) {
            const interval = setInterval(() => {
                dispatch(
                    getMessageHistory(
                        clientprofile && clientprofile.clientPhone
                    )
                );
            }, 5000000);
            return () => clearInterval(interval);
        }
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

            <PerfectScrollbar>
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
                                <p className='time'>
                                    {moment(m.dateSent).format('MMM Do')}
                                </p>
                            </div>
                        ))}
                </div>
            </PerfectScrollbar>
            <form className='text-input' onSubmit={submitNewMessage}>
                <textarea
                    rows='1'
                    cols='48'
                    onChange={handleInputChange}
                    value={message.message}
                    type='text'
                    placeholder='Write messages'
                ></textarea>
                <button>
                    <img
                        src='https://i.imgur.com/jT0eF6E.png'
                        alt='lil arrow'
                    ></img>
                </button>
            </form>
        </>
    );
}

export default LiveMessages;
