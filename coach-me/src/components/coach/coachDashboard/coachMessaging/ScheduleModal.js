import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getScheduledMessage,
    addScheduledMessage
} from '../../../../actions/coachActions';
import { ReactComponent as Exit } from '../../../utils/assets/Xicon.svg';
import './scheduleModal.scss';
const ScheduleModal = props => {
    console.log('ScheduleModal', props);
    const { show, setShow, clientId } = props;
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    const [scheduled, setScheduled] = useState(false);
    console.log('ScheduleModal STATE', state);

    useEffect(() => {
        dispatch(getScheduledMessage(clientId));
        setScheduled(false);
    }, [scheduled]);

    const scheduleMessage = () => {
        dispatch(addScheduledMessage(clientId));
        setScheduled(true);
        setShow();
    };

    return (
        <>
            <div
                className={`${
                    show === false ? 'hidden' : 'schedule-modal-container'
                }`}
            >
                <div className='schedule-modal-box'>
                    <Exit
                        className='exit-icon'
                        onClick={() => {
                            setShow();
                        }}
                    />
                    <h1> Schedule Message? </h1>
                    <div className='schedule-button-container'>
                        <button
                            className='cancel-bttn'
                            onClick={() => {
                                setShow();
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className='sch-btn'
                            onClick={() => {
                                scheduleMessage();
                            }}
                        >
                            Schedule
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScheduleModal;
