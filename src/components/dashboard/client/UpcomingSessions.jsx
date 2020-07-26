import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { getUpcomingSessions } from '../../../redux/actions/clientActions';
import './upcomingSession.scss';

function UpcomingSessions({ user, sessions }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUpcomingSessions(user.id));
    }, [sessions]);

    const dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'America/New_York',
    };

    return (
        <div id="upcoming-session-section">
            <h3>Upcoming Sessions</h3>
            <hr/>
            { sessions.length ? 
                <div>
                {sessions.map((el) => {
                    return (
                        <div key={el.id} className="upcoming-session-card">
                            <div className="session-line">
                                <strong>Date:</strong>{' '}
                                {new Intl.DateTimeFormat(
                                    'en-US',
                                    dateOptions
                                ).format(new Date(el.session_date))}
                            </div>
                            <div className="session-line">
                                <strong>Notes:</strong> {el.notes}
                            </div>
                            <div className="session-line">
                                <strong>Coach:</strong>{' '}
                                {`${user.coach.first_name} ${user.coach.last_name}`}
                            </div>
                        </div>
                    );
                })}
            </div> : <div className="no-sessions">You don't have any upcoming sessions</div>}
        </div>
    );
}

export default connect((state) => {
    return {
        user: state.client.client_data,
        sessions: state.client.upcomingSessions,
    };
})(UpcomingSessions);
