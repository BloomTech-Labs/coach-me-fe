import React from 'react';


const Input = ({message,setMessage,sendMessage}) => {
    return (
        <form action="" className="form">
              <input placeholder="Enter Message." type="text" value={message} onChange={(e)=> setMessage(e.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}/>
                <button onClick={(e)=>sendMessage(e)}>Send</button>
        </form>
    );
}

export default Input;
