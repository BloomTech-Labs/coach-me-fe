import React, { useState } from 'react';
import { connect } from 'react-redux';
import { InlineWidget, CalendlyEventListener } from 'react-calendly';
import Modal from '../../_global/Modal';


function CalendarWrapper() {
    const [modalVisibility, setModalVisibility] = useState(false);

    function handleDateConfirm(e){
        e.preventDefault();
        setModalVisibility(false);
    }

    return (
        
        <div className="">
            <Modal
            title="Please confirm your session date and time"
            content={
                <form onSubmit={(e) => {handleDateConfirm(e)}}>
                    <input required className="calendar-datetime-picker" type="datetime-local"/>
                    <button class="calendar-confirm-date-btn" type="submit">Confirm</button>
                </form>
            }
            visible={modalVisibility}
            />

            <CalendlyEventListener
                onEventScheduled={()=>{setModalVisibility(true)}}
            >
                <InlineWidget
                    pageSettings={{
                        hideLandingPageDetails: true,
                        hideEventTypeDetails: true,
                    }}
                    prefill={{
                        email: 'ayp@eyp.com',
                        firstName: 'John',
                        lastName: 'Travolta',
                    }}
                    url="https://calendly.com/brianetaveras/brian-will-tattoo-your-body"
                    styles={{
                        height: '100vh',
                    }}
                />
            </CalendlyEventListener>
        </div>
    );
}

export default connect((state) => {
    return {
        state: state.client.client_data,
        loggedIn: state.client.loggedIn,
    };
})(CalendarWrapper);
