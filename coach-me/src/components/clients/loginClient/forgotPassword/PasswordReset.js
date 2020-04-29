import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './PasswordReset.scss'

const PasswordReset = props => {
    const { getinfo } = props;
    const [input, setinput] = useState({ email: '', password: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const creds = [email, password]
    //     getinfo({ credentials: creds, history: props.history });
    // };
    
    return (
        <div className='reset-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'>
                    <Logo />
                </a>
                <p>Forgot Password</p>
            </div>
            <div className='form-container'>
                <form>
                    <label>New Password</label>
                    <input 
                    type=''
                    name=''
                    value=''
                    onChange={handleChange}
                    />
                    <label>Repeat Password</label>
                     <input 
                    type=''
                    name=''
                    value=''
                    onChange={handleChange}
                    />
                    <button type='submit'>Reset Password</button>
                </form>
                <span>Don't have an account?<a href='/register-client'>Signup</a></span>
            </div>
        </div>
    )
}

export default withRouter(PasswordReset);