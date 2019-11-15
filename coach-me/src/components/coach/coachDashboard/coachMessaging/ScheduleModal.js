import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getScheduledMessage,
    addScheduledMessage
} from '../../../../actions/coachActions';
import './scheduleModal.scss';
const ScheduleModal = props => {
    console.log('ScheduleModal', props);
    const { show, setShow, clientId } = props;
    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    const [scheduled, setScheduled] = useState(false);
    console.log('ScheduleModal STATE', state);

    return (
        <div className='schedule-modal-container'>I am the schedulemodal</div>
    );
};

export default ScheduleModal;
