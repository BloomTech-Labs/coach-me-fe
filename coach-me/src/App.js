import React from 'react';

import './App.css';
//Components

import LoginClient from './components/clients/loginClient/LoginClient';
import PrivateRoute from './components/utils/PrivateRoute';
import Routes from './components/utils/Routes';

// import { Provider } from 'react-redux';
// import store from './store';

function App() {
    return (
        // <Provider store={store}>
        <div className='App'>
            <LoginClient />
            <Routes />
        </div>
        // </Provider>
    );
}

export default App;
