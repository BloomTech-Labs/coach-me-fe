import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../.././assets/coachmelogo-white.svg';
import Backdrop from '../Backdrop';
import UIContext from '../../context/UIContext';
import './sideDrawer.scss';
const SideDrawer = () => {
    const { drawerOpen, backdropHandler } = useContext(UIContext);
    return (
        <div>
            <Backdrop
            show={drawerOpen}
            set={backdropHandler} />
            <div className={drawerOpen ? "sidedrawer-open" : "sidedrawer"}>
                <Logo className='logo' />
                <div className="nav">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Dashboard</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Logout</Link>
                </div>
   
            </div>
        </div>
    );
}

export default SideDrawer;
