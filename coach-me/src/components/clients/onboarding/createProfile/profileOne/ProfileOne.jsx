import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './profileOne.scss';
 
const ProfileOne = () => {

    const [userData,setUserData] =useState({
        weight: '',
        gender:''
    })

    const handleChange = (e) => {
        setUserData({...userData,[e.target.name] : e.target.value})
    }
    

    return (
        <div className='profile-one'>
            <header>
            <Link to='/createProfile3'><i className="fas fa-chevron-left"></i></Link>
                <h4>Let's create your Coach Me profile.</h4>
            </header>
            <div className="user-photo">
                <h4>Upload a photo</h4>
                <div className="photo">
                <i className="fas fa-camera-retro fa-3x"></i> 

                </div>
                <button>Choose Image</button>
            </div>
            <form >
                <input 
                type="text"
                name='weight'
                placeholder='Weight'
                value={userData.weight}
                onChange={handleChange}
                />
                <input 
                type="text"
                name='gender'
                placeholder='Gender'
                value={userData.gender}
                onChange={handleChange}
                />
                
            </form>

            <Link to='/createProfile3'><i className="fas fa-chevron-right"></i></Link>
        </div>
    );
}

export default ProfileOne;
