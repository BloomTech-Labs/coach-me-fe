import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { sendEmail } from '../../../../actions/clientActions';
import '../loginClient.scss';

const EmailRequest = props => {
    const dispatch = useDispatch();
    const [input, setinput] = useState({ cred_value: '', method: 'email' });
    const handleChange = e => {
        console.log("changed", e.target.value)
        setinput({ ...input, [e.target.name]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendEmail({input, history: props.history}));
    };
    return (
        <div className='creds-container'>
            <div className='img-container'>
                <a href='https://www.coachmehealth.org'><Logo /></a>
                <p>Forgot Password</p>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input 
                    type='text'
                    name='cred_value'
                    value={input.cred_value}
                    onChange={handleChange}
                    />
                    <button type='submit'>Request Password</button>
                </form>
            </div>
        </div>
    )
}

export default EmailRequest;