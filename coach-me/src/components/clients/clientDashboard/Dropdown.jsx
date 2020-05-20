import React, { useState } from 'react';
import './clientDashboard.scss';

const Dropdown = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {setShow(!show)}
    return (
        <div className='dashboard-nav'>
            <button className='' onClick={handleClick}>Menu</button>
            {show && (
                <div>
                    <a href='/'>Logout</a>
                    <a href=''>Notifications</a>
                    <a href=''>Resource Center</a>
                    <a href='/metrics'>Progress Tracking</a>
                    <a href=''>Session Notes</a>
                    <a href=''>Settings</a>
                </div>
            )}
        </div>
    );
};

export default Dropdown;