import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './coachDashboard.scss';
import ClientInfo from './clientsList/ClientInfo';
import ClientCard from './clientsList/ClientCard';

const CoachDashboard = () => {
  const [users, setUsers] = useState();
  const [number, setNumber] = useState();

  useEffect(() => {
    // Get request to airtable endpoint with api key appended to the end of url
    axios
      .get(
        'https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master?api_key=keyfahybUIpBkegFv'
      )
      .then(res => setUsers(res.data.records))
      .catch(err => console.log(err));
  }, []);

  console.log(users);

  const handleChange = e => {
    setNumber(e.target.value);
  };

  return (
    <div className='dashboard'>
      <div className='side-one'>
        <h1>Let's get you started!</h1>
        <p>
          Objectively deliver vertical internal or "organic" sources vis-a-vis
          turnkey oppurtunities
        </p>
        <img src='https://i.imgur.com/7YHZ8gM.jpg' alt='Placeholder' />
      </div>
      <div className='side-two'>
        <h1>Phone Number</h1>
        <p>Enter a phone number below. We will send you a code to verify.</p>
        <input
          type='text'
          placeholder='Mobile number'
          value={number}
          onChange={handleChange}
        />

        {number ? (
          <div className='send-btn'>Send Code</div>
        ) : (
          <div className='send-btn-disabled'>Send Code</div>
        )}
      </div>
      {/* <h1>Clients</h1>
      {users && users.map(client => <ClientCard client={client} />)} */}
    </div>
  );
};

export default CoachDashboard;
