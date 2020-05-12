import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Show from '../../assets/show_password.png';
import Hide from '../../assets/hide_password.png';
import { getNewPassword } from '../../../../actions/clientActions';
import { Link } from 'react-router-dom';
import '../loginClient.scss';

const PasswordReset = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ newPassword: '', repPassword: '' });
    const [hidden, setHidden] = useState(true);
    const [source, setSource] = useState(Show);
    const handleClick = () => {
        if(hidden == false){setHidden(true);setSource(Show);}else{setHidden(false);setSource(Hide);}
    };
    const handleChange = e => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getNewPassword({input, history: props.history}));
    };
    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'><Logo /></a>
                <p>Forgot Password</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>New Password</label>
                    <div className='password-container'>
                        <input 
                            type={hidden?'password':'text'}
                            name='newPassword'
                            value={input.newPassword}
                            onChange={handleChange}
                        />
                        <img className='eye' onClick={handleClick} src={source} alt='eye'/>
                    </div>
                    <label>Repeat Password</label>
                    <div className='password-container'>
                        <input 
                            type={hidden?'password':'text'}
                            name='repPassword'
                            value={input.repPassword}
                            onChange={handleChange}
                        />
                        <img className='eye' onClick={handleClick} src={source} alt='eye'/>
                    </div>
                    <button type='submit'>Reset Password</button>
                </form>
                <span>Don't have an account? <Link to='/register-client'>Signup</Link></span>
            </div>
        </div>
)};

export default PasswordReset;