import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <div>
      <PrivateRoute />
    </div>
  );
};

export default Routes;
