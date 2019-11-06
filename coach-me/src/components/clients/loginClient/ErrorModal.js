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
                    >>>>>>> 19dce4e0b091c60e11b5951cd5f7d489e224d6fc
                    <button onClick={() => handleClick()}>OK</button>
                </div>
            </div>
        );
    }
    return null;
};

export default ErrorModal;
