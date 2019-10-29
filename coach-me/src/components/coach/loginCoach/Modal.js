import React, { useState } from 'react';
import './modal.scss';

const Modal = ({ setModal }) => {
    const [email, setEmail] = useState('');

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const cancel = () => {
        setModal(false);
    };
    console.log(email);
    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1>Forgot your password?</h1>
                <p>
                    Enter the email you used to sign up and we’ll send you an
                    email with instructions to reset your password.
                </p>
                <input
                    placeholder='Email'
                    name='email'
                    onChange={handleChange}
                ></input>
                <div className='continue'>
                    <p className='cancel' onClick={cancel}>
                        Cancel
                    </p>
                    <div className='send-btn'>Send</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
