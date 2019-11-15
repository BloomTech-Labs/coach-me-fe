import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MessageCard from './MessageCard';
import {
    deleteScheduledMessage,
    getScheduledMessage
} from '../../../../actions/coachActions';
import backArrow from '../../../utils/assets/back.svg';
import { useDispatch } from 'react-redux';

const ScheduledMessagesList = props => {
    const state = useSelector(state => state.coach);
    const { messages, show, toggleScheduler } = props;
    // console.log(messages);
    const dispatch = useDispatch();
    const [messagelist, setmessagelist] = useState([]);

    useEffect(() => {
        if (state.scheduledMessage[0] !== undefined) {
            setmessagelist(state.scheduledMessage);
        }
        if (state.scheduledMessage.length === 0) {
            setmessagelist(state.scheduledMessage);
        }
    }, [messages]);

    const removedMessage = id => {
        const filtered = messagelist.filter(item => {
            if (item.scheduleId !== id) {
                // console.log('removedMessage line 20', item);
                // console.log('removedMessage item', item);
                // console.log('removedMessage id', id);
                return [item];
            }
        });

        // console.log('filited list', filtered);
        setmessagelist(filtered);
    };

    const updatedMessage = id => {
        const updated = messagelist.filter(item => {
            if (item.scheduleId !== id) {
                return [item];
            }
        });

        setmessagelist(updated);
    };

    // console.log(messagelist);
    // if (show) {

    if (state.scheduledMessage !== 0) {
        return (
            <div>
                <img
                    className='back-button-sheduler'
                    alt='back'
                    src={backArrow}
                    onClick={() => toggleScheduler(show)}
                ></img>
                <div>
                    {messagelist.map(item => (
                        <MessageCard
                            item={item}
                            clientId={props.clientId}
                            removedMessage={removedMessage}
                            updatedMessage={updatedMessage}
                        />
                    ))}
                </div>
            </div>
        );
    }

    return <h1>No messages scheduled</h1>;
    // }
    // return null
};

export default ScheduledMessagesList;
