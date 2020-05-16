import React from 'react';
import './backdrop.scss';
const Backdrop = (props) => {
    return (
        <div 
        className={props.showModal ? 'backdrop':'backdrop-closed'}
        onClick={()=>props.setShowModal(false)}>
            
        </div>
    );
}

export default Backdrop;
