import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { getClientInfoRegister } from '../../../actions/clientActions';

import '../loginClient/ClientStart.scss';

const RegisterClient = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ email: '', password: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getClientInfoRegister({input, history: props.history}));
    };
    
    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'>
                    <Logo />
                </a>
                <p>SignUp</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                    type='text'
                    name='email'
                    value={input.email}
                    onChange={handleChange}
                    />
                    
                    <label>Password</label>
                    <input 
                    type='text'
                    name='password'
                    value={input.password}
                    onChange={handleChange}
                    />
                    <span>
                        <a>Facebook</a>
                        <a>Twitter</a>
                    </span>
                    <button type='submit'>SignUp</button>
                </form>
                <span>Already have an account?<a href='/'>Login</a></span>
            </div>
        </div>
    )
};

export default RegisterClient;
