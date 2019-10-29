import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../actions/authActions';
import './coachRegistration.scss';

function coachRegistration(props) {
    // const state = useSelector(state => state);
    // const dispatch = useDispatch();
    // // const [fullName, setFullName] = useState();
    // // const [email, setemail] = useState();
    // // const [password, setpassword] = useState();
    // // const [confirmPassword, setconfirmPassword] = useState();
    // // const [register, setregister] = useState();

    // const handleChange = e => {
    //     e.preventDefault();
    //     setFullName(e.target.value);
    // };
    // const handleChange2 = e => {
    //     e.preventDefault();
    //     setemail(e.target.value);
    // };
    // const handleChange3 = e => {
    //     e.preventDefault();
    //     setpassword(e.target.value);
    // };
    // const handleChange4 = e => {
    //     e.preventDefault();
    //     setconfirmPassword(e.target.value);
    // };
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(registerUser(register));
    //     setshow(!show);
    // };
    // // useEffect(() => {
    //     setregister({
    //         records: [
    //             {
    //                 fields: {
    //                     FullName: fullName,
    //                     Email: email,
    //                     Password: password,
    //                     ConfirmPassword: confirmPassword,

    //                 }
    //             }
    //         ]
    //     });
    // }, [fullname, email, password, confirmPassword]);
    return (
        <div className='Register-Wrapper'>
            <div className='side-one'>
                <img src='https://i.imgur.com/eZTEnXz.png' alt='Placeholder' />
            </div>
            <div className='side-two'>
                <h1>Sign Up</h1>
                <p>Welcome to CoachMe! Please create a new coach account.</p>
                <form className='Register-Form-Wrapper' action=''>
                    <div className='input-Wrapper'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            name='full_name'
                            // onChange={handleChange}
                            // value={state.registerCred.full_name}
                        />

                        <input
                            type='text'
                            placeholder='Email'
                            name='E-Mail'
                            // onChange={handleChange2}
                            // value={state.registerCred.email}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            // onChange={handleChange3}
                            // value={state.registerCred.password}
                        />
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            name='password'
                            // onChange={handleChange4}
                            // value={state.registerCred.password}
                        />
                    </div>
                </form>
                <div className='signup-btn'>Sign-up</div>
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

export default coachRegistration;
