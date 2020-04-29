import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { getClientInfo } from '../../../actions/clientActions';

// Styling
import './LoginClient.scss';

const LoginClient = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ email: '', password: '' });

    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };

    // const getinfo = info => {
    //     setinput({ ...input, email: info.email, password: info.password });
    //     dispatch(getClientInfo(info));
    // };

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const creds = [email, password]
    //     getinfo({ credentials: creds, history: props.history });
    // };

    return (
        <div className='creds-container'>
        <div className='img-container'>
            <a href='https://www.coachmehealth.org'>
                <Logo />
            </a>
            <p>Login</p>
        </div>
        <div className='form-container'>
            <form> 
            {/* onSubmit={handleSubmit}> */}
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
                <button type='submit'>Login</button>
            </form>
            <span>Don't have an account?<a href='/register-client'>Signup</a></span>
            <span>Forgot Password<a href='/email-request'>Get new</a></span>
        </div>
    </div>
    );
};

export default LoginClient;
