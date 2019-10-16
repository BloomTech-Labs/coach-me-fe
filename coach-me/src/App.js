import React from 'react';

import './App.css';
//Components

import LoginClient from './components/clients/loginClient/LoginClient'
import RegisterClient from './components/clients/registerClient/RegisterClient'
import PrivateRoute from './components/utils/PrivateRoute';
import HealthMetricForm from './components/clients/healthMetricForm/HealthMetricForm';
import Routes from './components/utils/Routes';
import ClientLogin from './components/clients/loginClient/ClientLogin'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <LoginClient/>
      {/* <RegisterClient/> */}
      {/* <Routes /> */}
      <HealthMetricForm />
    </div>
    // </Provider>
  );
  }



export default App;
