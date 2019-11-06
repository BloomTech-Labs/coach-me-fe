import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Redux Action Import
import { getClientInfo } from '../../../actions/clientActions';

// Component Import
import UserPhoneNumber from './UserPhoneNumber';

// Styling
import './loginClient.scss';

const LoginClient = props => {
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
