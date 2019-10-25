import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './welcomeScreen.scss';

const WelcomeScreen = () => {
    const [coach, setCoach] = useState();
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(
                `https://coach-me-backend.herokuapp.com/clientRoute/getCoachInfo`,
                {
                    headers: {
                        Authorization: sessionStorage.getItem('token')
                    }
                }
            )
            .then(res => setCoach(res.data))
            .catch(err => console.log(err.message));
    }, []);

    console.log(coach);
    console.log('state info', state);
    return (
        <div className='welcomeScreen'>
            <h1>Welcome to CoachMe, {state.clientinfo.name}!</h1>
            <img
                src={coach && coach.coachObject.coachUrl}
                alt='Current Coach'
            />

            <div className='header2'>
                <h1>{coach && coach.coachObject.coachName}</h1>
                <p>Your Health Coach</p>
            </div>

            <p className='footerText'>
                is here to support you in your health goals. Expect a text
                message from your coach soon!
            </p>
        </div>
    );
};

export default WelcomeScreen;
