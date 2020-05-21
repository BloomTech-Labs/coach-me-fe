import React,{ useState } from 'react';
import './coachForm.scss';

const CoachForm = (props) => {
    return (
        <form className ='coach-form'onSubmit={props.handleSubmit}>
                <input
                    type='text'
                    required
                    name='first_name'
                    placeholder='First Name'
                    value={props.coachCredentials.first_name}
                    onChange={props.handleChange} 
                />
                <input
                    type='text'
                    required
                    name='last_name'
                    placeholder='Last Name'
                    onChange={props.handleChange}
                    value={props.coachCredentials.last_name}
                />
                <input
                    type='email'
                    required
                    name='email'
                    placeholder='E-Mail'
                    onChange={props.handleChange}
                    value={props.coachCredentials.email}
                />
                <input
                    type='text'
                    required
                    placeholder='Phone'
                    name='phone'
                    onChange={props.handleChange}
                    value={props.coachCredentials.phone}
                />
                <input 
                    type="date"
                    required
                    name='dob'
                    value={props.coachCredentials.dob}
                    onChange={props.handleChange}
                />
                 <input
                    type='password'
                    required
                    name='password'
                    placeholder='Password'
                    // pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
                    required
                    onChange={props.handleChange}
                    value={props.coachCredentials.password}
                /> 
                <input
                    type='password'
                    required
                    name='confirm_password'
                    placeholder='Confirm Password'
                    // pattern='(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'
                    required
                    onChange={props.handleChange}
                    value={props.coachCredentials.confirm_password}
                />
                <input 
                    type="text"
                    name='height'
                    placeholder='Height*'
                    value={props.coachCredentials.height}
                    onChange={props.handleChange}
                />
                <input 
                    type="text"
                    required
                    name='sex'
                    placeholder='Sex*'
                    value={props.coachCredentials.sex}
                    onChange={props.handleChange}
                />
                <button>Sign Up!</button>   
        </form>
    );
}
export default CoachForm;
