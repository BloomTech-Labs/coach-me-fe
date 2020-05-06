import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../../../../utils/UI/Backdrop';
import AccountModal from './AccountModal';
import './accountOne.scss';

import { useDispatch } from 'react-redux';
import { getClientInfoRegister } from '../../../../../actions/clientActions';

const AccountOne = (props) => {
    const dispatch = useDispatch();
    const [userAccountDetails, setUserAccountDetails] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        dob: '',
        password: '',
        confirm_password: '',
        height: '',
        sex: '',
        gender:''
    })

    const [showModal, setShowModal]= useState(false);

    const changeHandler = (e) => {
        setUserAccountDetails({...userAccountDetails,[e.target.name]: e.target.value})
        console.log(userAccountDetails)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getClientInfoRegister( {userAccountDetails, history: props.history}))
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
                name='first_name'
                placeholder='First Name'
                value={userAccountDetails.first_name}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='last_name'
                placeholder='Last Name'
                value={userAccountDetails.last_name}
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
                name='dob'
                value={userAccountDetails.dob}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='phone'
                placeholder='Phone'
                value={userAccountDetails.phone}
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
                name='confirm_password'
                placeholder='Confirm Password'
                value={userAccountDetails.confirm_password}
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
                value={userAccountDetails.sex}
                onChange={changeHandler}
                />
                <input 
                type="text"
                name='gender'
                placeholder='Gender'
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
                <button 
            className='continue'
            onClick={handleSubmit}
            >Continue</button>
            </form>
            
        </div>
    );
}
export default AccountOne;
