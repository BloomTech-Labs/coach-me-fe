import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

<<<<<<< HEAD
//Needs get request for messages
//Needs Post request to twilio
=======
//Needs get request for messages  http://localhost:4000/twilioRoute/messagehistory
//Needs Post request to twilio  http://localhost:4000/twilioRoute/twilio
>>>>>>> 047c969c9ad24d50d5800411d8aa81e059dceb71

function LiveMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const [messageHistory, setMessageHistory] = useState();

    useEffect(() => {
        postMessage(message);
        getMessageHistory();
    }, [messageHistory]); // maybe??

    const getMessageHistory = () => {
        axios
            .get(`http://localhost:4000/twilioRoute/messagehistory`)
            .then(res => {
                setMessageHistory(res.data);
                console.log(res);
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
<<<<<<< HEAD
=======
            {messageHistory && messageHistory.map(m => <p>{m.body}</p>)}
>>>>>>> 047c969c9ad24d50d5800411d8aa81e059dceb71
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
