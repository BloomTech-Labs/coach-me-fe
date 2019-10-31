import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './coachMessaging.scss'
// import MessageCanvas from './MessageCanvas'
// import '@progress/kendo-theme-material/dist/all.css';

//Needs get request for messages  http://localhost:4000/twilioRoute/messagehistory
//Needs Post request to twilio  http://localhost:4000/twilioRoute/twilio

function LiveMessages(props) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const [message, setMessage] = useState();
    const [phone, setPhone] = useState();
    const [creds, setCreds] = useState();
    const [messageHistory, setMessageHistory] = useState([]);

    // data snap shot
    // {
    //     "message":"derps",
    //     "Phone":"(806)518-8727"
    // }

    let messageCreds = {
        message: message,
        Phone: phone
    }

    useEffect(() => {
        getMessageHistory();
    }, [messageHistory]); // maybe??

    useEffect(() => {
        postMessage();
    }, [message]); // maybe??

    useEffect(() => {
        setCreds({messageCreds})
    }, [message, phone]);



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
            .post(`${process.env.REACT_APP_BACK_END_URL}/twilioRoute/twilio`, post)
            .then(res =>  console('postTwilio', res))
            .catch(err => console.log('postTwilio ERR', err));
    };

    const handleInputChange = e => {
        e.preventDefault();
        setMessage(e.target.value);
    };
    const handleInputChange2 = e => {
        e.preventDefault();
        setPhone(e.target.value);
    };
   

    const submitNewMessage = e => {
        e.preventDefault();
        if((message  && phone) !== undefined) {

            postMessage(creds);
        }
        
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
            { messageHistory.toMessages && messageHistory.toMessages.map(m => <div className='messages'>
                <p>{m.body}</p>
                </div>)}
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
