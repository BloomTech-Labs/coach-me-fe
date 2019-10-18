import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './welcomeScreen.scss';

const WelcomeScreen = () => {
  const [coach, setCoach] = useState('Karin');
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        'https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Coaches?api_key=keyfahybUIpBkegFvs'
      )
      .then(res => setCoach(res.data))
      .catch(err => console.log(err.message));
  }, []);

  console.log('state data', state);
  console.log('coach data', coach);
  return (
    <div className='welcomeScreen'>
      <h1>Welcome to CoachMe, {coach}!</h1>
      <img
        src='https://dl.airtable.com/.attachments/2964a7624923f374610c1b583a7edc24/3b8b5096/Karin_bitmoji.jpeg'
        alt='Current Coach'
      />

      <div className='header2'>
        <h1>{coach}</h1>
        <p>Your Health Coach</p>
      </div>

      <p className='footerText'>
        {coach} is here to support you in your health goals. Expect a text
        message from your coach soon!
      </p>
    </div>
  );
};

export default WelcomeScreen;
