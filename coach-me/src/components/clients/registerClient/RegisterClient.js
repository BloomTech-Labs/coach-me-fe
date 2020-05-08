import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { getClientInfoRegister } from '../../../actions/clientActions';

import '../loginClient/loginClient.scss';

const RegisterClient = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ email: '', password: '' });

    const handleChange = e => {
        console.log(e.target.value)
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
                <p>Signup</p>
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
                    <div>
                        <a className="fb">Facebook</a>
                        <a className="tw">Twitter</a>
                    </div>
                    <button className="send" type='submit'>SignUp</button>
                </form>
                <span>Already have an account?<a href='/'>Login</a></span>
            </div>
        </div>
    )
};

export default RegisterClient;
