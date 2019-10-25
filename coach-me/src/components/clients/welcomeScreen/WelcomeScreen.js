import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './welcomeScreen.scss';
import { translate } from '../../utils/language/translate';

const WelcomeScreen = props => {
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
            <h1>
                {translate('welcome')} <br /> CoachMe, {state.clientinfo.name}!
            </h1>
            <img
                src={coach && coach.coachObject.coachUrl}
                alt='Current Coach'
            />

            <div className='header2'>
                <h1>{coach && coach.coachObject.coachName}</h1>
                <p>{translate('coachIntro')}</p>
            </div>

            <p className='footerText'>
                {coach.coachObject.coachName}
                {translate('welcomeMessage')}
            </p>

            <button
                className='nextBtn'
                onClick={() => {
                    props.history.push('/metrics');
                }}
            >
                {translate('continueBtn')}
            </button>
        </div>
    );
};

export default WelcomeScreen;
