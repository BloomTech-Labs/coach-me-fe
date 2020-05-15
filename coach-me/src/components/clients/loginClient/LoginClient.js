import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../assets/logo.svg';
import Show from '../assets/show_password.png';
import Hide from '../assets/hide_password.png';
import { getClientInfoLogin } from '../../../actions/clientActions';
import { Link } from 'react-router-dom';
import './loginClient.scss';

const LoginClient = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ email: '', password: '' });
    const [hidden, setHidden] = useState(true);
    const [source, setSource] = useState(Show);
    const handleClick = () => {
        if(hidden === false){setHidden(true);setSource(Show);}else{setHidden(false);setSource(Hide);}
    };
    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getClientInfoLogin({ input, history: props.history }));
    };
    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'><Logo /></a>
                <p>Login</p>
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
                    <div className='password-container'>
                        <input 
                        type={hidden?'password':'text'}
                        name='password'
                        value={input.password}
                        onChange={handleChange}
                        />
                        <img className='eye' onClick={handleClick} src={source} alt='eye'/>
                    </div>
                    <button type='submit'>Log in</button>
                </form>
                <div className="social-links">
                    <a className="fb">Facebook</a>
                    {/* <a className="go">Google</a> */}
                </div>
                <p>Don't have an account?<Link to='/register-client'>Signup</Link></p>
                <p><Link to='/email-request'>Forgot Password?</Link></p>
            </div>
        </div>
)};

export default LoginClient;