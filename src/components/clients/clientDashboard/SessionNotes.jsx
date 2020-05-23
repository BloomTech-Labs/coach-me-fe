import React, { useState } from 'react';
import './clientDashboard.scss';

const SessionNotes = () => {
    return (
        <div className='session-notes'>
            <h1>Session Notes</h1>
            <div className='notes'>
                 {/*Eventually array of session notes */}
                 <p>You don't have session notes right now!</p>
            </div>
        </div>
    );
};

export default SessionNotes;