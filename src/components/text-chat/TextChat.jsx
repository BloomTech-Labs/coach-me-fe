import React,{useState, useEffect} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import Input from './Input';
import InfoBar from './InfoBar';
import Messages from './Messages'


const ENDPOINT = 'https://chat-test-coach.herokuapp.com/';
let socket;
const TextChat = (props) => {
    const [name, setName] = useState('');
    const [room,setRoom] = useState('');
    const [message, setMessage]=('');
    const [messages,setMessages]=([]);
    useEffect(() => {
        socket = io(ENDPOINT);

        setName(props.state.first_name)
        setRoom(`${props.state.first_name}-meeting`)

        socket.emit('join', {name, room}, (error) => {
            if(error) {console.log(error)}
        });
        
    },[props.location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message])
        })
    }, [messages])

    const sendMessage =(event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', message, () =>  setMessage(''))      
        }
    }

    console.log(message, messages)

    
    return (
        <div className='outer-container'>
            <div className='container'>
              
                <InfoBar room={room} />
                <Messages messages={messages} />
                <Input 
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                />

            </div>
        </div>
    );
}



const mapStateToProps = (state) => {
    return {
        state: state.coach.data,
    }
};

export default connect(mapStateToProps)(TextChat);
