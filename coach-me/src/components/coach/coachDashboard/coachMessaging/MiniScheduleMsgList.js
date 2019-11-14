import React, { useState, useEffect } from 'react';
import MiniMessageCard from './MiniMessageCard';

function MiniScheduleMsgList(props) {
    const { messages } = props;
    console.log('MiniScheduleMsgList', messages);
    const [messagelist, setmessagelist] = useState([]);

    useEffect(() => {
        if (messages[0] !== undefined) {
            setmessagelist(messages);
        }
        if (messages.length === 0) {
            setmessagelist(messages);
        }
    }, [messages]);

    if (messages.length !== 0) {
        return (
            <div>
                {messagelist.map(item => (
                    <div className='mini-card-list'>
                        <MiniMessageCard
                            item={item}
                            clientId={props.clientId}
                        />
                    </div>
                ))}
            </div>
        );
    }
    return <h1>No messages scheduled</h1>;
}

export default MiniScheduleMsgList;
