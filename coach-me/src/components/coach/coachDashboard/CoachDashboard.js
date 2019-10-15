import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './coachDashboard.scss';
import ClientInfo from './clientsList/ClientInfo';
import ClientCard from './clientsList/ClientCard';

const CoachDashboard = () => {
  const [users, setUsers] = useState();

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

  return (
    <div>
      <h1>Clients</h1>
      {users && users.map(client => <ClientCard client={client} />)}
    </div>
  );
};

export default CoachDashboard;
