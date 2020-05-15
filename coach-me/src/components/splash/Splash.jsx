import React from 'react';
import AboutUs from './AboutUs';
import happy from '../utils/img/happyLady.jpg';
import './splash.scss';

const Splash = () => {
    return (
        <div className='splash-screen'>
            <header>
                <div className="hero-text">
                <h1>Coach Me.</h1>
                <p>We're a <span>patient-first</span> non-profit fighting <span>chronic disease</span>.</p>
                <p className='small-text'>Improving the health of low-income Americans with diabetes and heart disease with health coaching for those who need it most.</p>
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
