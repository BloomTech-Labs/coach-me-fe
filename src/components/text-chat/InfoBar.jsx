import React from 'react';
import {Link} from 'react-router-dom';


const InfoBar = ({room}) => {
    return (
        <div className='infobar'>
            <div className="leftInnerContainer">
                {/* <img src="" alt="" className="onlineIcon"/> */}
                <h3>Room: {room}</h3>
            </div>
            <div className="rightInnerContainer">
                <Link to='/'>Leave Chat</Link>
            </div>
            
        </div>
    );
}

export default InfoBar;
