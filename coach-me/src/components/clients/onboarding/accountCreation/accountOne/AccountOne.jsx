import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../../../../utils/UI/Backdrop';
import AccountModal from './AccountModal';
import './accountOne.scss';

const AccountOne = () => {

    const [userAccountDetails, setUserAccountDetails] = useState({
        name: '',
        email:'',
        dob: '',
        password: '',
        confirmPassword: '',
        agreeText: false,
        agreeTos: false
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
                name='name'
                placeholder='Full Name'
                value={userAccountDetails.name}
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
