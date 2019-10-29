import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginCoach.scss';
import Modal from './Modal';

const LoginCoach = () => {
    const [modal, setModal] = useState(false);

    const triggerModal = () => {
        setModal(true);
    };
    return (
        <>
            {modal ? <Modal setModal={setModal} /> : null}
            <div className='Login-Wrapper'>
                <div className='side-one'>
                    <img
                        src='https://i.imgur.com/eZTEnXz.png'
                        alt='Placeholder'
                    />
                </div>
                <div className='side-two'>
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your coach account.</p>
                    <form className='Login-Form-Wrapper' action=''>
                        <div className='input-Wrapper'>
                            <input
                                type='text'
                                placeholder='Email'
                                name='E-Mail'
                                className='email'
                                // onChange={handleChange2}
                                // value={state.registerCred.email}
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                className='password'
                                // onChange={handleChange3}
                                // value={state.registerCred.password}
                            />
                        </div>
                        <div className='forgot' onClick={() => triggerModal()}>
                            Forgot password?
                        </div>
                    </form>
                    <div className='signup-btn'>Login</div>
                    <div className='register-container'>
                        Don't have an account?{' '}
                        <Link className='register' to='/register'>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCoach;
