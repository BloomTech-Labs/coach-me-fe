import React from 'react';
import { translate } from '../../utils/language/translate';
import { useSelector } from 'react-redux';
import { ReactComponent as Warning } from './assets/warning.svg';
import './ErrorModal.scss';

const ErrorModal = props => {
    const state = useSelector(state => state);
    const { check, handleRedirect } = props;
    console.log(state);

    const handleClick = e => {
        handleRedirect();
    };

    if (state.error && check === false) {
        return (
            <div className='modal-container'>
                <div className='modal-box'>
                    <Warning />
                    <p>Phone number is invalid</p>
                    {/* <h1>{translate('Form-Failure')}</h1> */}

                    <button onClick={() => handleClick()}>OK</button>
                </div>
            </div>
        );
    }
    return null;
};

export default ErrorModal;
