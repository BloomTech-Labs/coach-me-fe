import React from 'react';
import { Route, Redirect } from 'react-router';

const withPrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />;
        }
        return <Redirect to='/home' />;
      }}
    />
  );
};

export default withPrivateRoute;
