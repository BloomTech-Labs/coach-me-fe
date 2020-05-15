import React from 'react';
import { ReactComponent as Logo } from '../.././assets/coachmelogo-white.svg';
import './navigation.scss';

const Navigation = () => {
    return (
        <nav className='navigation'>
            <Logo />
            <i className="fas fa-bars fa-3x"></i>
        </nav>
    );
}

export default Navigation;
