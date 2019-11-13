import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MessageCard from './MessageCard';

const ScheduledMessagesList = () => {
    const state = useSelector(state => state.coach);
    console.log(state);
    return (
        <div>
            {state &&
                state.scheduledMessage.map(item => <MessageCard item={item} />)}
        </div>
    );
};

export default ScheduledMessagesList;
