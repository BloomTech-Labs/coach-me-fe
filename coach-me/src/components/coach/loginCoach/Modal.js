import React, { useState } from 'react';

import axios from 'axios';

//Styling
import './modal.scss';

const Modal = ({ setModal }) => {
    const [email, setEmail] = useState({cred_value: ''});
    const [showError, setShowError] = useState(false);
    const [messageFromServer, setMessageFromServer] = useState('');

    const handleChange = event => {
        setEmail(event.target.value);
    };

    const cancel = () => {
        setModal(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (email.cred_value === '') {
            setShowError(false);
            setMessageFromServer('');
        } else {
            axios
                .post(`http://localhost:5000/api/auth/forgot_password`, {
                    method: 'email',
                    user_type: 'coach',
                    cred_value: email
                    })
                .then(res => {
                   console.log(res)
                })
                .catch(err => {
                    console.log(err.data);
                });
        }
    };

    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='top-content'>
                    <h1>Forgot your password?</h1>
                    <p className='direction'>
                        Enter the email you used to sign up and we’ll send you
                        an email with instructions to reset your password.
                    </p>
                </div>
                <div className='input-container'>
                    <input
                        data-cy='input4'
                        placeholder='Email'
                        name='email'
                        value={email.cred_value}
                        onChange={handleChange}
                    ></input>
                </div>
                {showError && (
                    <p className='error'>
                        That email address isn't recognized. Please try again or
                        register for a new account.
                    </p>
                )}
                {messageFromServer === 'recovery email sent' && (
                    <h3 className='success'>
                        Password Reset Email Successfully Sent!
                    </h3>
                )}
                <div className='continue'>
                    <p className='cancel' onClick={cancel}>
                        Cancel
                    </p>
                    <div className='send-btn' onClick={sendEmail}>
                        Send
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
