import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScheduledMessagesList from './ScheduledMessagesList';
import ScheduledMessages from './ScheduledMessages';
import MiniScheduleMsgList from './MiniScheduleMsgList';
import { getMessageHistory } from '../../../../actions/coachActions';

function ViewAllScheduledMessages(props) {
    const { clientprofile } = props;
    const dispatch = useDispatch();
    const state = useSelector(state => state.coach);
    const [show, setShow] = useState(false);
    const [messagelist, setmessagelist] = useState([]);

    useEffect(() => {
        if (state.scheduledMessage[0] !== undefined) {
            dispatch(getMessageHistory(clientprofile.clientId));
            setmessagelist(state.scheduledMessage);
        }
        if (state.scheduledMessage.length === 0) {
            setmessagelist(state.scheduledMessage);
            // dispatch(getMessageHistory)
        }
    }, [clientprofile.clientId]);
    console.log(clientprofile);

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
                        />
                    </div>
                    <div className='mini-list'>
                        <MiniScheduleMsgList
                            clientId={clientprofile.clientId}
                            messages={state.ScheduledMessage}
                            messagelist={messagelist}
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
                messages={state.ScheduledMessage}
                show={show}
                toggleScheduler={toggleScheduler}
            />
        );
    }
}

export default ViewAllScheduledMessages;
