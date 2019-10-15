import React from 'react';

import './App.css';

import withPrivateRoute from './components/utils/withPrivateRoute';
import Routes from './components/utils/Routes';
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <h1>hello</h1>
      <withPrivateRoute />
      <Routes />
    </div>
    // </Provider>
  );
}

export default App;
