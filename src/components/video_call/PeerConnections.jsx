import React, { useState } from 'react';

const Caller = props => {
    const [visibility, setVisbility] = useState('initial');
    const handleAnswer = e => {
        e.preventDefault();
        props.answer( props.caller, props.answerCallback, props.userStream );
        setVisbility('none');
    }

    return(
        <>
            <button style={{display: {visibility}}} value={ props.caller.id } onClick={handleAnswer}>{props.caller.name ? `Answer ${props.caller.name}` : 'Next Call'}</button>
        </>
    );
}

const Available = props => {
    const [visibility, setVisbility] = useState('initial');
    console.log( props.available );
    const user = props.available;
    const handleCall = e => {
        e.preventDefault();
        props.callPeer( e.target.value, props.userStream, props.setPartnerStream );
        setVisbility('none');
    }
    return (
        <div>
            <button style={{display: {visibility}}} key={ user } value={ user } onClick={ handleCall }>Enter Coach's Waiting Room</button>
        </div>
    );
}

export { Caller, Available };