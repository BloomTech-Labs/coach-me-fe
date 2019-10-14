import React from 'react';
import withPrivateRoute from './withPrivateRoute';
import { Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <withPrivateRoute />
    </div>
  );
};

export default Routes;
