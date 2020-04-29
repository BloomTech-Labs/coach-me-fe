import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './EmailRequest.scss'

const EmailRequest = props => {
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
        <div className='request-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'>
                    <Logo />
                </a>
                <p>Forgot Password</p>
            </div>
            <div className='form-container'>
                <form>
                    <label>Your email</label>
                    <input 
                    type=''
                    name='email'
                    value=''
                    onChange={handleChange}
                    />
                    <button type='submit'>Request Password</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(EmailRequest);