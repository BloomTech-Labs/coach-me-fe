import React from 'react';
//Component Imports
import Routes from './components/utils/Routes';
import Navigation from './components/utils/UI/navigation/Navigation';
import Footer from './components/utils/UI/footer/Footer';
//Styling
import './App.css';

// Test commit

function App() {
    return (
        <div className='App'>
            <Navigation />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
