import React, { useEffect, useState } from 'react';
import {
    deleteScheduledMessage,
    getScheduledMessage,
    updateScheduledMessage
} from '../../../../actions/coachActions';
import UpdateModal from './UpdateModal';
import { useDispatch, useSelector } from 'react-redux';
import DeleteModal from './DeleteModal';
import './messageCard.scss';

const MessageCard = props => {
    const { item, removedMessage, updatedMessage, clientId } = props;

    const dispatch = useDispatch();

    const [showUpdateModal, setUpdateModal] = useState(false);
    const [showDeleteModal, setDeleteModal] = useState(false);

    // useEffect(() => {
    //     // if(clientprofile) {
    //     // }

    //     dispatch(getScheduledMessage(props.clientId));
    //     // eslint-disable-next-line
    // }, [props.clientId]);

    const toggleUpdateModal = () => {
        setUpdateModal(!showUpdateModal);
    };
    const toggleDeleteModal = () => {
        setDeleteModal(!showDeleteModal);
    };

    return (
        <>
            <div className='message-card-container'>
                <div className='message-card'>
                    <div className='date-time-wrapper'>
                        <div className='date-container'>
                            <p>{item.month}</p>
                            <p>{item.dom},</p>
                            <p>{item.year}</p>
                        </div>
                        <div className='time-container'>
                            <p>{item.hour}:</p>
                            <p>{item.min} </p>
                            <p>{item.ampm}</p>
                        </div>
                    </div>
                    <div className='scheduled-message-container'>
                        <p>{item.msg}</p>
                    </div>
                </div>
                <div className='button-container'>
                    <button
                        className='edit-bttn'
                        onClick={e => {
                            e.preventDefault();
                            console.log('clicked');
                            toggleUpdateModal();
                        }}
                    >
                        {' '}
                        Edit{' '}
                    </button>
                    <button
                        className='delete-bttn'
                        onClick={e => {
                            e.preventDefault();
                            toggleDeleteModal();
                        }}
                    >
                        {' '}
                        Delete
                    </button>
                    <UpdateModal
                        show={showUpdateModal}
                        id={item.scheduleId}
                        updatedMessage={updatedMessage}
                        setShow={toggleUpdateModal}
                        clientId={clientId}
                        messageObj={item}
                    />
                    <DeleteModal
                        show={showDeleteModal}
                        id={item.scheduleId}
                        removedMessage={removedMessage}
                        setShow={toggleDeleteModal}
                        clientId={clientId}
                    />
                </div>
            </div>
        </>
    );
};
export default MessageCard;
