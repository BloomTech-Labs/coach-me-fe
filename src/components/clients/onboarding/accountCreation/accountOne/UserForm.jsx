import React from 'react';

const UserForm = (props) => {
    return (
        <form >
                <input 
                type="text"
                name='first_name'
                placeholder='First Name'
                value={props.userAccountDetails.first_name}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='last_name'
                placeholder='Last Name'
                value={props.userAccountDetails.last_name}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='email'
                placeholder='electronic Mail'
                value={props.userAccountDetails.email}
                onChange={props.changeHandler}
                />
                <input 
                type="date"
                name='dob'
                value={props.userAccountDetails.dob}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='phone'
                placeholder='Phone'
                value={props.userAccountDetails.phone}
                onChange={props.changeHandler}
                />
                <input 
                type="password"
                name='password'
                placeholder='Password'
                value={props.userAccountDetails.password}
                onChange={props.changeHandler}
                />
                <p className='subtext'>A valid password must have a minimum of 800 characters and include a number and a special symbol</p>
                <input 
                type="password"
                name='confirm_password'
                placeholder='Confirm Password'
                value={props.userAccountDetails.confirm_password}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='height'
                placeholder='Height*'
                value={props.userAccountDetails.height}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='weight'
                placeholder='Weight'
                value={props.userAccountDetails.weight}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='sex'
                placeholder='Sex*'
                value={props.userAccountDetails.sex}
                onChange={props.changeHandler}
                />
                <input 
                type="text"
                name='gender'
                placeholder='Gender'
                value={props.userAccountDetails.gender}
                onChange={props.changeHandler}
                />
                <button 
                className='continue'
                onClick={props.handleSubmit}
                >Continue</button>
        </form>
    );
}

export default UserForm;
