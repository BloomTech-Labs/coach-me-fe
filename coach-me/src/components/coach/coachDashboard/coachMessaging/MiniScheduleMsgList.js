import React, { useState, useEffect } from 'react';
import MiniMessageCard from './MiniMessageCard';
import { useSelector, useDispatch } from 'react-redux';
import { getMessageHistory } from '../../../../actions/coachActions';

function MiniScheduleMsgList(props) {
    const { messages, clientId, messagelist } = props;
    // console.log('MiniScheduleMsgList', messages);
    // const [messagelist, setmessagelist] = useState([]);
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     // if (state.scheduledMessage[0] !== undefined) {
    //         dispatch(getMessageHistory(clientId))
    //        setmessagelist(state.scheduledMessage);
    //     // }
    //     // if (state.scheduledMessage.length === 0) {
    //     //     setmessagelist(state.scheduledMessage);
    //     //     dispatch(getMessageHistory)
    //     // // }

    // }, [messagelist]);

    if (state.scheduledMessage !== 0) {
        return (
            <div className='mini-card-container'>
                {messagelist.slice(0, 2).map(item => (
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
