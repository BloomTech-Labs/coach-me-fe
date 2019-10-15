import React from 'react';

import './App.css';
//Components
import withPrivateRoute from './components/utils/withPrivateRoute';
import LoginClient from './components/LoginClient'
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <h1>hello</h1>
      <LoginClient/>
      <withPrivateRoute />
    </div>
    // </Provider>
  );
}

export default App;
