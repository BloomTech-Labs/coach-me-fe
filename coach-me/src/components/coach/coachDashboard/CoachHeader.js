import React from 'react';
import './coachHeader.scss';
import { ReactComponent as Logo } from './assets/logo.svg';

const CoachHeader = () => {
    return (
        <div className='coach-header'>
            <Logo />
            <div className='small-profile'>
                <div className='profile-img'></div>
                <h3> Karin Underwood</h3>
            </div>
        </div>
    );
};

export default CoachHeader;
