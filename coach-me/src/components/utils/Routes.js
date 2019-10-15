import React from 'react';
import withPrivateRoute from './withPrivateRoute';
import { Route, Redirect } from 'react-router-dom';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientInfo from '../coach/coachDashboard/clientsList/ClientInfo';

const Routes = () => {
  return (
    <div>
      <withPrivateRoute />
      <Route path='/metrics' component={HealthMetric} />
      <Route path='/dashboard' component={CoachDashboard} />
      <Route path='/client/:clientid' component={ClientInfo} />
    </div>
  );
};

export default Routes;
