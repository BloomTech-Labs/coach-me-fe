import React from 'react';
import './Notifications.scss';

const Notifications = (props) => {
    console.log('props',props)
    return (
        <div className='notifications'>
            <h1>Notifications</h1>
            <p>all caught up!</p>
        </div>
    );
};

export default Notifications;
