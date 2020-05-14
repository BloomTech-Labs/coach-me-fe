import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './splash.scss';

const AboutUs = () => {

    const [showCoachLogin, setshowCoachLogin] =  useState(false)
    const clickHandler = () => {
        setshowCoachLogin(!showCoachLogin);
    }
    return (
        <div className='about'>
            <h4>About CoachMe</h4>
            <p>CoachMe offers tele-health coaching to individuals with cardiovascular disease (CVD).  We match real, trained coaches with patients to help them receive the personalized support they need to make a change.</p>

            <p className="speak-to-rep">If you'd like more information <a href="">Speak to a representative</a> to learn more! If you're ready to get started, use the buttons below! </p>

            <div className="buttons">
                <div className={showCoachLogin ? "clients-buttons hide" : "clients-buttons button-box"}>
                    <Link to='/client-login'><button>Log in</button></Link>
                    <Link to='/createAccount'><button>Sign up</button></Link>
                    

                    <p className='coach-toggle'
                    onClick={clickHandler}
                    >Show me Coach options.</p>
                </div>
                <div className={showCoachLogin ? "coaches-buttons button-box" : "coaches-buttons hide"}>
                <Link to='/coach-login'><button>Log in as Coach</button></Link>
                <Link to='/coach-register'><button>Apply to be a Coach</button></Link>
                    <p className='coach-toggle'
                    onClick={clickHandler}
                    >Show me Client options.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
