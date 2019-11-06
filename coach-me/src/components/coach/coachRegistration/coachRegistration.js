import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux Action
import { registerCoach } from '../../../actions/authActions';

//Styling
import './coachRegistration.scss';

function CoachRegistration(props) {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [register, setregister] = useState();

    const handleChange = e => {
        e.preventDefault();

        setFullName(e.target.value);
    };
    const handleChange2 = e => {
        e.preventDefault();
        setemail(e.target.value);
    };
    const handleChange3 = e => {
        e.preventDefault();

        setpassword(e.target.value);
    };

    useEffect(() => {
        setregister({
            records: [
                {
                    fields: {
                        name: fullName,
                        email: email,
                        password: password
                    }
                }
            ]
        });
    }, [fullName, email, password]);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(registerCoach(register));
    };
    return (
        <div className='Register-Wrapper'>
            <div className='side-one'>
                <img src='https://i.imgur.com/eZTEnXz.png' alt='Placeholder' />
            </div>
            <div className='side-two'>
                <h1>Sign Up</h1>
                <p>Welcome to CoachMe! Please create a new coach account.</p>
                <form
                    onSubmit={e => {
                        handleSubmit(e);
                    }}
                    className='Register-Form-Wrapper'
                >
                    <div className='input-Wrapper'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            name='name'
                            onChange={handleChange}
                            value={fullName}
                        />

                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            onChange={handleChange2}
                            value={email}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange3}
                            value={password}
                        />
                    </div>
                    <button className='signup-btn' type='submit'>
                        Sign-up
                    </button>
                </form>

                <div className='login-container'>
                    Already have an account?{' '}
                    <Link className='login' to='/login'>
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CoachRegistration;
