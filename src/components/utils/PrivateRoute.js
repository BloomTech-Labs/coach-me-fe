import React from 'react';
import AxiosWithCred from './axiosWithCred';
import { Route, Redirect } from 'react-router';

const PrivateRoute = async ({ component: Component, ...rest }) => {
    const verified = await AxiosWithCred.get('/auth/verify_session');
    return (
        <Route
            {...rest}
            render={props => {
                if ( verified ) {
                    return <Component {...props} />;
                }
                return <Redirect to='/' />;
            }}
        />
    );
};

export default PrivateRoute;
