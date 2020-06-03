import React, {useEffect, useState} from 'react';
import AxiosWithCred from './axiosWithCred';
import { Route, Redirect } from 'react-router';

const PrivateRoute =  ({ component: Component, ...rest }) => {
    const [auth, setAuth] = useState({isAuth: false,
                                      ready: false
                                    });
    useEffect( ()=>{
        const peepee = async () => {
            try {
                const verified = await AxiosWithCred.get('/auth/verify_session');
                setAuth({
                    isAuth: true,
                    ready: true
                })
            } catch (error) {
                setAuth({...auth, ready: true})
            }
        }
        peepee();
    }, [])
    return (
        <>
        {auth.ready && <Route
            {...rest}
            render={props => {
                if ( auth.isAuth ) {
                    return <Component {...props} />;
                }
                return <Redirect to='/' />;
            }}
        />}
        </>
    );
};

export default PrivateRoute;
