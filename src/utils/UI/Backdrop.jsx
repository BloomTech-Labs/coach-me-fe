import React from 'react';
import './backdrop.scss';
const Backdrop = (props) => {
    return (
        <div 
        className={props.show ? 'backdrop':'backdrop-closed'}
        onClick={(e)=> {
            e.cancelBubble = true;
            e.stopPropagation();
            props.set(false)
            }}>
        </div>
    );
}

export default Backdrop;
