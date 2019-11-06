import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Redux Action
import { getClientInfoLogin } from '../../../actions/clientActions';
//Component Import
import UserPhoneNumber from './UserPhoneNumber';
//Styling
import './loginClient.scss';

const FormLogin = props => {
    const dispatch = useDispatch();
    const [config, setConfig] = useState({ phonenumber: '' });
    const handleChange = e => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };

    const getinfo = info => {
        setConfig({ ...config, phonenumber: info });
        dispatch(getClientInfoLogin(info));
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

export default FormLogin;
