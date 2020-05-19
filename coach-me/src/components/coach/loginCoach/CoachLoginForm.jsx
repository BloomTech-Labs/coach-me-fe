import React from 'react';
import { Link } from 'react-router-dom';

const CoachLoginForm = (props) => {
    return (
        <form
            className='Login-Form-Wrapper'
            onSubmit={e => {
                props.handleSubmit(e);
            }}
        >
            <input
                type='text'
                placeholder='Email'
                name='email'
                className='email'
                onChange={props.handleChange}
                value={props.coachCredentials.email}
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
                className='password'
                onChange={props.handleChange}
                value={props.coachCredentials.password}
            />
            <div
                className='forgot'
                onClick={() => props.triggerModal()}
            >
                Forgot password?
            </div>
    <div className='layout-wrapper'>
        <button type='submit' className='signup-btn'>
            {' '}
            Login
        </button>
            </div>
            <div className='register-container'>
                Don't have an account?{' '}
                <Link className='register' to='/register'>
                    Sign up
                </Link>
            </div>
        </form>
    );
}

export default CoachLoginForm;
