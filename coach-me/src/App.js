import React from 'react';

import './App.css';
//Components

import LoginClient from './components/clients/loginClient/LoginClient'
// import RegisterClient from './components/clients/registerClient/RegisterClient'
import PrivateRoute from './components/utils/PrivateRoute';
import Routes from './components/utils/Routes';
import HealthMetricForm from './components/clients/healthMetricForm/HealthMetricForm';

// import ClientLogin from './components/clients/loginClient/ClientLogin'

function App() {
  return (
    <div className='App'>
      <Routes/>
   
    </div>
  );
}

export default App;
