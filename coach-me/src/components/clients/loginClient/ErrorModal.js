import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as Warning } from './assets/warning.svg';
import './ErrorModal.scss';

const ErrorModal = props => {
    const state = useSelector(state => state);
    const { check, handleRedirect } = props;

    const handleClick = e => {
        handleRedirect();
    };

    if (state.error && check === false) {
        return (
            <div className='modal-container'>
                <div className='modal-box'>
                    <Warning />
                    <p>Phone number is invalid</p>
<<<<<<< HEAD
=======

>>>>>>> 4a616ee18d699d0e8a7431c4936db5aa15c1c831
                    <button onClick={() => handleClick()}>OK</button>
                </div>
            </div>
        );
    }
    return null;
};

export default ErrorModal;
