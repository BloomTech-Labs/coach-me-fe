import React,{useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../.././assets/coachmelogo-white.svg';
import Backdrop from '../Backdrop';
import UIContext from '../../context/UIContext';
import './sideDrawer.scss';
const SideDrawer = (props) => {
    const { drawerOpen, backdropHandler } = useContext(UIContext);
    useEffect(() => {
        console.log(props.loggedIn)
    },[])
    return (
        <div>
            {console.log(props.loggedIn)}
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
const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(SideDrawer);
