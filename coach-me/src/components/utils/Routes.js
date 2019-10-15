import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Redirect } from 'react-router-dom';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientInfo from '../coach/coachDashboard/clientsList/ClientInfo';

const Routes = () => {
  return (
    <div>
      <Route path='/metrics' component={HealthMetric} />
      <Route path='/dashboard' component={CoachDashboard} />
      <Route path='/client/:clientid' component={ClientInfo} />
    </div>
  );
};

export default Routes;
