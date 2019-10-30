import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ReactComponent as Logo } from './assets/logo.svg';
import './coachDashboard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getClients} from '../../../actions/authActions';
import CoachHeader from './CoachHeader'
import ClientInfo from './clientsList/ClientInfo/ClientInfo';
import ClientCard from './clientsList/ClientCard';
import ClientList from './clientsList/ClientsList'
import SearchForm from './SearchForm'


const CoachDashboard = ({ history }) => {
    const [users, setUsers] = useState();

    const [number, setNumber] = useState();
    const [verifyNumber, setVerifyNumber] = useState('');
    const [checkOne, setCheckOne] = useState(false);
    const [checkTwo, setCheckTwo] = useState(false);
    const [clientprofile, setclientprofile] =useState()
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    useEffect(() => {
        // Gt request to airtable endpoint with api key appended to the end of url
      
      if(token){
          dispatch(getClients(token))
      }
      
    },[token]);

    const handleInput = e => {
        setNumber(e.target.value);
    };

    const handleInputTwo = e => {
        setVerifyNumber(e.target.value);
    };

    const handleCheckOne = () => {
        setCheckOne(true);
    };

    const handleCheckTwo = () => {
        setCheckTwo(true);
    };

    const handleCheckThree = () => {
        history.push('/clients');
    };
    const setClient = (clientID) => {
        console.log(clientID)
        state.clientRecords.filter( client => {
            
            if(clientID === client.clientId){
              setclientprofile(client)
            }

        })

    }

    return (
        
        <>
        <CoachHeader/>
        <div className ='coachdashboard-container'>
        
        <div className= 'clientlist-container'>
        <SearchForm setClient={setClient}/>
        </div>
        <div className = 'clientinfo-container'>
        <ClientInfo clientprofile={clientprofile}/>
        </div>
        </div>

            {/* {checkTwo ? (
                <div className='welcome'>
                    <Logo />
                    <div className='side-one'>
                        <img
                            src='https://i.imgur.com/7YHZ8gM.jpg'
                            alt='Placeholder'
                        />
                    </div>
                    <div className='side-two'>
                        <h1>Welcome to CoachMe!</h1>
                        <p>
                            Efficiently facilitate cutting-edge e-tailers
                            without just in time value.
                        </p>
                        <div
                            className='continue-btn'
                            onClick={handleCheckThree}
                        >
                            Continue
                        </div>
                    </div>
                </div>
            ) : (
                <div className='dashboard'>
                    <div className='side-one'>
                        <h1>Let's get you started!</h1>
                        <p>
                            Objectively deliver vertical internal or "organic"
                            sources vis-a-vis turnkey oppurtunities
                        </p>
                        <img
                            src='https://i.imgur.com/7YHZ8gM.jpg'
                            alt='Placeholder'
                        />
                    </div>
                    {checkOne ? (
                        <div className='side-two'>
                            <h1>Confirm Number</h1>
                            <p>
                                Enter 4 digit code that was sent to +1 {number}.
                            </p>
                            <input
                                type='text'
                                value={verifyNumber}
                                onChange={handleInputTwo}
                                maxLength='4'
                            />

                            <div className='flex'>
                                <p>Change phone number?</p>
                                <p>Resend Code</p>
                            </div>
                            {verifyNumber ? (
                                <div
                                    className='send-btn'
                                    onClick={handleCheckTwo}
                                >
                                    Confirm
                                </div>
                            ) : (
                                <div className='send-btn-disabled'>Confirm</div>
                            )}
                        </div>
                    ) : (
                        <div className='side-two'>
                            <h1>Phone Number</h1>
                            <p>
                                Enter a phone number below. We will send you a
                                code to verify.
                            </p>
                            <input
                                type='number'
                                placeholder='Mobile number'
                                value={number}
                                onChange={handleInput}
                                maxLength='10'
                            />

                            {number ? (
                                <div
                                    className='send-btn'
                                    onClick={handleCheckOne}
                                >
                                    Send Code
                                </div>
                            ) : (
                                <div className='send-btn-disabled'>
                                    Send Code
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )} */}
        </>
    );
};

export default CoachDashboard;
