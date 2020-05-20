import React,{useContext} from 'react';
import { ReactComponent as Logo } from '../.././assets/coachmelogo-white.svg';
import UIContext from'../../context/UIContext';
import './navigation.scss';

const Navigation = () => {
    const { backdropHandler, drawerOpen } = useContext(UIContext)
    return (
        <nav className='navigation'>
            <Logo />
            <i 
            onClick={backdropHandler}
            className={drawerOpen ? 'fas fa-bars fa-3x rotate' : "fas fa-bars fa-3x"}></i>
        </nav>
    );
}

export default Navigation;
