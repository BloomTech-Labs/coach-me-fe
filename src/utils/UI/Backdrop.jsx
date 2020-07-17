import React from 'react';
import './backdrop.scss';
const Backdrop = (props) => {
    return (
        <div 
        className={props.show ? 'backdrop':'backdrop-closed'}
        onClick={()=> props.set(false)}>
        </div>
    );
}

export default Backdrop;
