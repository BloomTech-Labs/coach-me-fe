import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

//Needs get request for messages  http://localhost:4000/twilioRoute/messagehistory
//Needs Post request to twilio  http://localhost:4000/twilioRoute/twilio

function LiveMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const [messageHistory, setMessageHistory] = useState([]);

    useEffect(() => {
        getMessageHistory();
    }, [messageHistory]); // maybe??

    useEffect(() => {
        postMessage(message);
    }, []);

    const getMessageHistory = () => {
        axios
            .get(
                `${process.env.REACT_APP_BACK_END_URL}/twilioRoute/messagehistory/(806)518-8727`
            )
            .then(res => {
                console.log('getMessageHistory', res.data);
                setMessageHistory(res.data);
            })
            .catch(err => console.log('getMessageHistory ERR', err));
    };

    const postMessage = post => {
        axios
            .post(`http://localhost:4000/twilioRoute/twilio`, post)
            .then(res => console('postTwilio', res))
            .catch(err => console.log('postTwilio ERR', err));
    };

    const handleInputChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    const submitNewMessage = e => {
        e.preventDefault();
        setMessage(e.target.value);
        // dispatch(addMessage(message));
    };
    //submit needs to hook up with twilio

    return (
        <>
            {/* contains get request twilio data */}

            <div>
                {/* <MessageCanvas/> */}
                <p className='client-test'>hello</p>
                <p className='coach-test'>hello</p>
            </div>
            { messageHistory.toMessages && messageHistory.toMessages.map(m => <p>{m.body}</p>)}
            <form onSubmit={submitNewMessage}>
                <textarea
                    rows='4'
                    cols='50'
                    onChange={handleInputChange}
                    value={message}
                    type='text'
                    placeholder='Type your message here'
                ></textarea>
                <button>Send</button>
            </form>
        </>
    );
}

export default LiveMessages;
