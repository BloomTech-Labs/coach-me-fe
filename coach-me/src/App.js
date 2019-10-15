import React from 'react';

import './App.css';

import Routes from './components/utils/Routes';

// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  return (
    // <Provider store={store}>
    <div className='App'>
      <Routes />
    </div>
    // </Provider>
  );
}

export default App;
