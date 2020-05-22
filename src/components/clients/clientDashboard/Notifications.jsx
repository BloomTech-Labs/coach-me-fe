import React from 'react';
import './clientDashboard.scss';

const Notifications = () => {
    return (
        <div className='notifications-container'>
            <h1>Notifications</h1>
            <div className='notifications'>
                {/*Eventually array of notifications */}
                <p>Welcome To CoachMe, $name!</p>
            </div>
            
        </div>
    );
};

export default Notifications;