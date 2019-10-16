import React from 'react';

import './App.css';
//Components

import LoginClient from './components/clients/loginClient/LoginClient';
import HealthMetricForm from './components/clients/healthMetricForm/HealthMetricForm';
import PrivateRoute from './components/utils/PrivateRoute';
import Routes from './components/utils/Routes';

// import { Provider } from 'react-redux';
// import store from './store';

function App() {
    return (
        <div className='App'>
            <LoginClient />
            <HealthMetricForm />
        </div>
    );
}

export default App;
