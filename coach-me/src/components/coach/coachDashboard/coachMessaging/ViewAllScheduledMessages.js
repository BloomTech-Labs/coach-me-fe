import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduledMessagesList from './ScheduledMessagesList';
import ScheduledMessages from './ScheduledMessages';
import MiniScheduleMsgList from './MiniScheduleMsgList';
import { getScheduledMessage } from '../../../../actions/coachActions';

function ViewAllScheduledMessages(props) {
    const { clientprofile, type } = props;
    const dispatch = useDispatch();
    const state = useSelector(state => state.coach);
    const [show, setShow] = useState(false);

    const toggleScheduler = e => {
        setShow(!show);
    };

    if (!show) {
        return (
            <div>
                <div>
                    <div className='ScheduleMessages-Container-Main'>
                        <ScheduledMessages
                            clientprofile={props.clientprofile}
                            type={type}
                        />
                    </div>
                    <div className='mini-list'>
                        <MiniScheduleMsgList
                            clientId={clientprofile.clientId}
                            messages={state.scheduledMessage}
                        />
                        <button
                            className='veiw-all-button'
                            onClick={() => toggleScheduler()}
                        >
                            View All
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <ScheduledMessagesList
                clientId={clientprofile.clientId}
                messages={state.scheduledMessage}
                show={show}
                toggleScheduler={toggleScheduler}
            />
        );
    }
}

export default ViewAllScheduledMessages;
