import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginCoach } from '../../../actions/authActions';
import { Link } from 'react-router-dom';
import './loginCoach.scss';
import Modal from './Modal';

const LoginCoach = (props) => {
    const dispatch = useDispatch();
    const [creds, setCreds] = useState({email:'', password:''});
    const [modal, setModal] = useState(false);

    const triggerModal = () => {
        setModal(true);
    };

    const handleChange =(e) =>{
        setCreds({...creds, [e.target.name]: e.target.value })
    

    } 
  
   


    const handleSubmit = () => {
        
        dispatch(loginCoach(creds));
        props.history.push('/dashboard')
        
        
      
    };
    return (
        <>
        {modal ? <Modal setModal={setModal} /> : null}
        <div className='Login-Wrapper'>
            <div className='side-one'>
                <img src='https://i.imgur.com/eZTEnXz.png' alt='Placeholder' />
            </div>
            <div className='side-two'>
                <h1>Login</h1>
                <p>Welcome back! Please login to your coach account.</p>
                <form className='Login-Form-Wrapper' onSubmit={(e)=>{
                    e.preventDefault();
                    handleSubmit()}}>
                    <div className='input-Wrapper'>
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            className='email'
                            onChange={handleChange}
                            value={creds.email}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            name='password'
                            className='password'
                            onChange={handleChange}
                            value={creds.password}
                        />
                    </div>
                    <button type='submit' className= 'signup-btn'> Login</button>
                    <div className='forgot' onClick={() => triggerModal()}>
                            Forgot password?
                     </div>
                </form>
                <div className='register-container'>
                    Don't have an account?{' '}
                    <Link className='register' to='/register'>
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
        </>
    )}

export default LoginCoach;
