import React from 'react';
import AboutUs from './AboutUs';
import happy from '../utils/img/happyLady.jpg';
import './splash.scss';

const Splash = () => {
    return (
        <div className='splash-screen'>
            <header>
                <div className="hero-text">
                <h1>This is Coach me, dawg.</h1>
                <p>We here to halp.</p>
                </div>
                <div className="hero-img">
                    <img src={happy} alt="A happy Woman in Fall"/>
                </div>
            </header>
            <AboutUs />
            
        </div>
    );
}

export default Splash;
