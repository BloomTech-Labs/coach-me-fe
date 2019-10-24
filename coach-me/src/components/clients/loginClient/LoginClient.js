import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserPhoneNumber from './UserPhoneNumber';
import { getClientInfo } from '../../../actions/clientActions';
import './loginClient.scss';

//925-639-1639
const LoginClient = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [config, setConfig] = useState({ phonenumber: '' });
    const handleChange = e => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const getinfo = info => {
        setConfig({ ...config, phonenumber: info });
        dispatch(getClientInfo(info));
    };

    return (
        <UserPhoneNumber
            handleChange={handleChange}
            config={config}
            setconfig={setConfig}
            getinfo={getinfo}
        />
    );
};

export default LoginClient;
