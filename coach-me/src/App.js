import React from 'react';

import './App.css';

import withPrivateRoute from './components/utils/withPrivateRoute';
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <h1>hello</h1>
      <withPrivateRoute />
    </div>
    // </Provider>
  );
}

export default App;
