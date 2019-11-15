import React, { useState, useEffect } from 'react';

import MessageCard from './MessageCard';
import {
    deleteScheduledMessage,
    getScheduledMessage
} from '../../../../actions/coachActions';

const ScheduledMessagesList = props => {
    const { messages } = props;
    const [messagelist, setmessagelist] = useState([]);

    useEffect(() => {
        if (messages[0] !== undefined) {
            setmessagelist(messages);
        }
        if (messages.length === 0) {
            setmessagelist(messages);
        }
    }, [messages]);

    const removedMessage = id => {
        const filtered = messagelist.filter(item => {
            if (item.scheduleId !== id) {
                return [item];
            }
        });

        setmessagelist(filtered);
    };

    if (messages.length !== 0) {
        return (
            <>
                <h1 className='list-header'>Previously Scheduled Messages </h1>
                {messagelist.map(item => (
                    <MessageCard
                        item={item}
                        clientId={props.clientId}
                        removedMessage={removedMessage}
                    />
                ))}
            </>
        );
    }

    return (
        <>
            <h1>Previously Scheduled Messages </h1>
            <h1>No messages scheduled</h1>
        </>
    );
};

export default ScheduledMessagesList;
