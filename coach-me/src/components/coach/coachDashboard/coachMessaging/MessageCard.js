import React from 'react';
import {
    updateScheduledMessage,
    deleteScheduledMessage
} from '../../../../actions/coachActions';
import { useDispatch, useSelector } from 'react-redux';

const MessageCard = props => {
    const { item } = props;
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    console.log('MessageCard STATE', item);
    return (
        <>
            <div style={{ border: '1px solid red' }}>
                <div>
                    <h1>{item.mon}</h1>
                    <h1>{item.dom}</h1>
                    <h1>{item.year}</h1>
                    <h1>{item.msg}</h1>
                </div>

                <div className='button-container'>
                    <button> Edit </button>
                    <button
                        onClick={() => {
                            dispatch(deleteScheduledMessage(item.scheduleId));
                        }}
                    >
                        {' '}
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};
export default MessageCard;
