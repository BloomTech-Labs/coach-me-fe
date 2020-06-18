import React from 'react';

const Caller = props => {
    const handleAnswer = e => {
        e.preventDefault();
        props.answer( props.caller, props.answerCallback, props.userStream );
    }
    return(
        <>
            <button value={ props.caller.id } onClick={handleAnswer} >Answer</button>
        </>
    );
}

const Available = props => {
    const handleCall = e => {
        e.preventDefault();
        props.callPeer( e.target.value, props.userStream ,props.setPartnerStream );
    }
    return (
        <ul>
            { props.available.map( user => user === props.userId ? null : <button key={ user } value={ user } onClick={ handleCall }>Call User</button> ) }
        </ul>
    );
}

export { Caller, Available };