import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ShowEye from '../../assets/show_password.png';
import HideEye from '../../assets/hide_password.png';
import { getNewPassword } from '../../../../actions/clientActions';

import '../loginClient.scss';

const PasswordReset = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ password: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getNewPassword({input, history: props.history}));
    };
    
    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'>
                    <Logo />
                </a>
                <p>Forgot Password</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>New Password</label>
                    <div className='password-container'>
                    <input 
                    type=''
                    name=''
                    value=''
                    onChange={handleChange}
                    />
                    <img className='eye' src={ShowEye} alt='eye'/>
                    </div>
                    <label>Repeat Password</label>
                    <div className='password-container'>
                     <input 
                    type=''
                    name=''
                    value=''
                    onChange={handleChange}
                    />
                    <img className='eye' src={ShowEye} alt='eye'/>
                    </div>
                    <button type='submit'>Reset Password</button>
                </form>
                <span>Don't have an account? <a href='/register-client'>Signup</a></span>
            </div>
        </div>
    )
}

export default PasswordReset;