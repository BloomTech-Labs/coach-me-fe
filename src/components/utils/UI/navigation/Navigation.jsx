import React,{useContext} from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../.././assets/coachmelogo-white.svg';
import UIContext from'../../context/UIContext';
import './navigation.scss';
import { FormikProvider } from 'formik';
import api from '../../api';

const Navigation = () => {
    const { backdropHandler, drawerOpen } = useContext(UIContext)
    const logout = () => {
        localStorage.clear()
        
        api.post(`${process.env.REACT_APP_BACKEND}/auth/logout`, {withCredentials: true})
    }
    return (
        <nav className='navigation'>
            <Logo />
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/'>Support</Link>
                <Link
                onClick={logout}
                to='/'>Logout</Link>
            </div>
            <i 
            onClick={backdropHandler}
            className={drawerOpen ? 'fas fa-bars fa-3x rotate' : "fas fa-bars fa-3x"}></i>
        </nav>
    );
}

export default Navigation;
