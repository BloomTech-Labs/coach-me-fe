import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

//Needs get request for messages
//Needs Post request to twilio

function LiveMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const handleInputChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    const submitNewMessage = e => {
        e.preventDefault();
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
