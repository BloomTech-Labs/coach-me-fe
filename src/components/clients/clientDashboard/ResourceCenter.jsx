import React, { useState } from 'react';
import './clientDashboard.scss';

const ResourceCenter = () => {
    return (
        <div className='resource-center'>
            <h1>Resource Center</h1>
            <div className='resources'>
                 {/*Eventually array of resources */}
                 <p>You have no resources at this time!</p>
            </div>
        </div>
    );
};

export default ResourceCenter;