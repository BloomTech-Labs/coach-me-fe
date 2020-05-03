import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../../../../utils/UI/Backdrop';
import CompleteModal from './CompleteModal';

import './profileSix.scss';

import randomLady from '../../../../utils/img/random-lady.jpg';
const ProfileSix = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className='profile-six'>
            <Backdrop
            showModal={showModal}
            setShowModal={setShowModal}
             />
             <CompleteModal
              showModal={showModal}
              setShowModal={setShowModal} 
              />
             
            <header>
            <Link to='/createProfile5'><i className="fas fa-chevron-left"></i></Link>
                <div className="user-image">
                    <img src={randomLady} alt=""/>
                </div>
                <h4>Almost done!</h4>
            </header>
            <div className="confirmation">
                <p>This program offers a bridge between where you are and where you want to be.</p>
                
                <p>You'll work closely with a personal health coach to identify your wellness vision. You'll set specific goals for healthy habits, such as excercising, nutrition, or managing a condition. You will visit regularly with your coach to help you stick to your plan and meet your goals!</p>

                <ul>
                    <li>16 week proven program.</li>
                    <li>Weekly consultations with your Coach</li>
                    <li>A personalized Wellness Plan</li>
                    <li>Tips to help you stay on track.</li>
                </ul>
            </div>
            {/* CONFIRMATION */}
            <button 
            className='continue'
            onClick={()=>setShowModal(true)}
            >Confirm</button>
        </div>
        // PROFILE SIX
    );
}

export default ProfileSix;
