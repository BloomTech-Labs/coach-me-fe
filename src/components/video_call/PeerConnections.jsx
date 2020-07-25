import React, { useState } from 'react';

const Caller = props => {
    const [visibility, setVisbility] = useState(true);
    const handleAnswer = e => {
        e.preventDefault();
        props.answer( props.caller, props.answerCallback, props.userStream );
        setVisbility(false);
    }

    return(

        <>
            { visibility && <button value={ props.caller.id } onClick={handleAnswer}>{props.caller.name ? `Answer` : 'Next Call'}</button> }
        </>
    );
}

const Available = props => {
    const [visibility, setVisbility] = useState(true);
    console.log( props.available );
    const user = props.available;
    const handleCall = e => {
        e.preventDefault();
        props.callPeer( e.target.value, props.userStream, props.setPartnerStream );
        setVisbility(false);
    }
    return (
        <div>
           { visibility && <button key={ user } value={ user } onClick={ handleCall }>Enter Coach's Waiting Room</button> }
        </div>
    );
}

const OnlineUsers = props => {
    const [visibility, setVisbility] = useState(true);
    console.log('running')
    const handleCall = e => {
        e.preventDefault();
        props.callPeer( e.target.value, props.userStream, props.setPartnerStream );
        setVisbility(false);
    }
    return (
        <div>
            { visibility && props.users.map(user => <button key={ user } value={ user } onClick={ handleCall }></button>)}
        </div>
    );
}

export { Caller, Available, OnlineUsers };