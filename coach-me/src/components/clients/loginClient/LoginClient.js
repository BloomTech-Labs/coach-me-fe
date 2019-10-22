import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserPhoneNumber from './UserPhoneNumber';
import { getClientInfo } from '../../../actions/clientActions';
import './loginClient.scss';


//925-639-1639
const LoginClient = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [config, setconfig] = useState({ phonenumber: '' });
    const handleChange = e => {
        setconfig({ ...config, [e.target.name]: e.target.value });
    };
    const getinfo = info => {
        setconfig({ ...config, phonenumber: info });
        dispatch(getClientInfo(info));
     const loginAttempts =   localStorage.getItem('loginAttempts')
        console.log('Look at all this info!',loginAttempts)
        if(loginAttempts == 1){
          props.history.push('/welcome');
        }
        else{
          props.history.push('/metric-form');
        }

        
    };

    return (
        <div>
            <UserPhoneNumber
                handleChange={handleChange}
                config={config}
                setconfig={setconfig}
                getinfo={getinfo}
            />
        </div>
    );
};

export default LoginClient;
