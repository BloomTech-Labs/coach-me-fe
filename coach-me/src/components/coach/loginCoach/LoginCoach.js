import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginCoach } from '../../../actions/authActions';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../utils/assets/coachmelogo-white.svg';
import CoachLoginForm from './CoachLoginForm';

//Component Imports
import Modal from './Modal';

//Styling
import './loginCoach.scss';

const LoginCoach = props => {
    const [coachCredentials, setCoachCredentials] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const triggerModal = () => {
        setModal(true);
    };

    const handleChange = e => {
        e.preventDefault();
        setCoachCredentials({
            ...coachCredentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        localStorage.clear();
        dispatch(loginCoach(coachCredentials)).then(() => {
            props.history.push('/dashboard');
        });
    };
    return (
        <>
            {modal ? <Modal setModal={setModal} /> : null}
            <div className='Login-Wrapper'>
                <div className='side-one'>
                    <div className='logo-wrapper'>
                        <a href='https://www.coachmehealth.org'>
                            <Logo className='logo' />
                        </a>
                    </div>

                    <div className='objective'>
                        <p>
                            We're patient-first, a non-profit, and in the fight
                            against chronic disease.
                        </p>
                    </div>
                </div>

                <div className='side-two'>
                    <h1>Login</h1>
                    <p>Welcome back! Please login to your coach account.</p>
                    <CoachLoginForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        coachCredentials={coachCredentials}
                        triggerModal={triggerModal}
                    />
                </div>
            </div>
        </>
    );
};

export default LoginCoach;
