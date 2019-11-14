import React, { useEffect, useState } from 'react';
import {
    deleteScheduledMessage,
    getScheduledMessage,
    updateScheduledMessage
} from '../../../../actions/coachActions';
// import UpdateModal from './UpdateModal'
import { useDispatch, useSelector } from 'react-redux';

const MessageCard = props => {
    const { item, removedMessage } = props;

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    // useEffect(() => {
    //     // if(clientprofile) {
    //     // }

    //     dispatch(getScheduledMessage(props.clientId));
    //     // eslint-disable-next-line
    // }, [props.clientId]);

    const toggleModal = e => {
        setShow(!show);
    };

    return (
        <>
            <div style={{ border: '1px solid red' }}>
                <div>
                    <p>{item.month}</p>
                    <p>{item.dom}</p>
                    <p>{item.year}</p>
                    <p>{item.msg}</p>
                </div>

                <div className='button-container'>
                    <button onClick={() => toggleModal()}> Edit </button>
                    <button
                        onClick={e => {
                            e.stopPropagation();
                            dispatch(deleteScheduledMessage(item.scheduleId));
                            removedMessage(item.scheduleId);
                        }}
                    >
                        {' '}
                        Delete
                    </button>
                    {/* <UpdateModal toggleModal={toggleModal} show={show}/> */}
                </div>
            </div>
        </>
    );
};
export default MessageCard;
