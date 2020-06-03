import React, {useEffect, useState} from 'react';
import AxiosWithCred from './axiosWithCred';
import { Route, Redirect } from 'react-router';

const PrivateRoute =  ({ component: Component, ...rest }) => {
    const [auth, setAuth] = useState(false);
    useEffect(async ()=>{
        try {
            const verified = await AxiosWithCred.get('/auth/verify_session');
            setAuth(true)
        } catch (error) {
            setAuth(false)
        }
    }, [])
    return (
        <Route
            {...rest}
            render={props => {
                if ( auth ) {
                    return <Component {...props} />;
                }
                return <Redirect to='/' />;
            }}
        />
    );
};

export default PrivateRoute;
