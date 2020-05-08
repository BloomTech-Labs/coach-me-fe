import React, { useState } from 'react';
import Backdrop from '../../../../utils/UI/Backdrop';
import AccountModal from './AccountModal';
import './accountOne.scss';

const AccountOne = () => {

    const [userAccountDetails, setUserAccountDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        password: '',
        confirmPassword: '',
        height: '',
        sex: '',
    })

    const [showModal, setShowModal]= useState(false);

    const changeHandler = (e) => {
        setUserAccountDetails({...userAccountDetails,[e.target.name]: e.target.value})
    }

    return (
        <div className='account-one'>
            <header>
                <h4>Let's create your Coach Me account</h4>
            </header>
            <Backdrop
            showModal={showModal}
            setShowModal={setShowModal}
             />
             <AccountModal
              showModal={showModal}
              setShowModal={setShowModal} />
            <form >
                <input 
                type="text"
                name='firstName'
                placeholder='First Name'
                value={userAccountDetails.firstName}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='lastName'
                placeholder='Last Name'
                value={userAccountDetails.lastName}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='email'
                placeholder='electronic Mail'
                value={userAccountDetails.email}
                onChange={changeHandler}
                />
                <input 
                type="date"
                name='birthdate'
                placeholder='Birthdate'
                value={userAccountDetails.dob}
                onChange={changeHandler}
                />
                <input 
                type="password"
                name='password'
                placeholder='Password'
                value={userAccountDetails.password}
                onChange={changeHandler}
                />
                <input 
                type="password"
                name='confirmPassword'
                placeholder='Confirm Password'
                value={userAccountDetails.confirmPassword}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='height'
                placeholder='Height*'
                value={userAccountDetails.height}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='weight'
                placeholder='Weight'
                value={userAccountDetails.weight}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='sex'
                placeholder='Sex*'
                value={userAccountDetails.gender}
                onChange={changeHandler}
                />
                <p className='subtext'>A valid password must have a minimum of 800 characters and include a number and a special symbol</p>
                <div className="checkboxes">
                    <div>
                        <input type="checkbox"/>
                        <p >Allow Coach Me to text me important updates.</p>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <p>I have read and agree to the terms of service and Privacy Policy.</p>
                    </div> 
                </div> 
            </form>
            <button 
            className='continue'
            onClick={()=>setShowModal(true)}
            >Continue</button>
        </div>
    );
}
export default AccountOne;
