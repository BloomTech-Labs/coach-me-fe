import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { InlineWidget, CalendlyEventListener } from 'react-calendly';
import Modal from '../../_global/Modal';
import { scheduleSession } from '../../../redux/actions/clientActions';
function CalendarWrapper({user}) {
    
    const dispatch = useDispatch();

    const [modalVisibility, setModalVisibility] = useState(false);
    const [sessionDate, setSessionDate] = useState('')
    function handleDateConfirm(e) {
        e.preventDefault();
        setModalVisibility(false);
        dispatch(scheduleSession({
            user_id: user.id,
            date: sessionDate,
            notes: "Don't forget to eat your vegetables!",
            coach_id: user.coach.id

        }))
    }
    function handleInputChange(e){
        setSessionDate(e.target.value);
    }

    return (
        <div className="calendar-container">
            <h3>Schedule a session</h3>
            <Modal
                title="Please confirm your session date and time"
                content={
                    <form
                        onSubmit={(e) => {
                            handleDateConfirm(e);
                        }}
                    >
                        <input
                            required
                            className="calendar-datetime-picker"
                            type="datetime-local"
                            onInput={handleInputChange}
                        />
                        <button className="calendar-confirm-date-btn" type="submit">
                            Confirm
                        </button>
                    </form>
                }
                visible={modalVisibility}
            />

            <CalendlyEventListener
                onEventScheduled={() => {
                    setModalVisibility(true);
                }}
            >
                {user.coach.calendly_url ? 
                <InlineWidget
                    pageSettings={{
                        hideLandingPageDetails: true,
                        hideEventTypeDetails: true,
                    }}
                    prefill={{
                        email: user.email,
                        firstName: user.first_name,
                        lastName: user.last_name,
                    }}
                    url={user.coach.calendly_url}
                    styles={{
                        height: '450px',
                        overflow: 'hidden'
                    }}
                />
                
            : ""}
            </CalendlyEventListener>
        </div>
    );
}

export default connect((state) => {
    return {
        user: state.client.client_data,
        loggedIn: state.client.loggedIn,
    };
})(CalendarWrapper);
