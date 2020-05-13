import React,{ useState } from 'react';
import './coachForm.scss';

const CoachForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    value={props.coachCredentials.first_name}
                    onChange={props.handleChange} 
                />
                <input
                    type='text'
                    name='last_name'
                    placeholder='Last Name'
                    onChange={props.handleChange}
                    value={props.coachCredentials.last_name}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='E-Mail'
                    onChange={props.handleChange}
                    value={props.coachCredentials.email}
                />
                <input
                    type='text'
                    placeholder='Phone'
                    name='phone'
                    onChange={props.handleChange}
                    value={props.coachCredentials.phone}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    // pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
                    // required
                    onChange={props.handleChange}
                    value={props.coachCredentials.password}
                /> 
                                <input
                    type='password'
                    name='confirm_password'
                    placeholder='Confirm Password'
                    // pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
                    // required
                    onChange={props.handleChange}
                    value={props.coachCredentials.confirm_password}
                />
                <button>Sign Up!</button>   
        </form>
    );
}
export default CoachForm;
