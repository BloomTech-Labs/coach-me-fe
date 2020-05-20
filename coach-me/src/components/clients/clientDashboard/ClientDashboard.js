import React from 'react';
import Dropdown from './Dropdown';
import './clientDashboard.scss';

const ClientDashboard = (props) => {
    console.log('props',props)
    return (
        <div className='client-dashboard'>
            <Dropdown />
            <div className='main'>
                <p>Welcome Name</p>
            </div>
        </div>
    );
};

export default ClientDashboard;
