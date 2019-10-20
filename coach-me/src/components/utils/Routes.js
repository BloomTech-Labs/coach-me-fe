import React from 'react';
import PrivateRoute from './PrivateRoute';
import { Route, Redirect } from 'react-router-dom';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientDashboard from '../clients/clientDashboard/ClientDashboard';
import ClientInfo from '../coach/coachDashboard/clientsList/ClientInfo';
import ClientsList from '../coach/coachDashboard/clientsList/ClientsList';
import ChooseLanguage from '../clients/chooseLanguage/ChooseLanguage';
import TestTranslator from '../clients/chooseLanguage/TestTranslator';
import HealthMetricForm from '../clients/healthMetricForm/HealthMetricForm';
import LoginClient from '../clients/loginClient/LoginClient';
import Welcome from '../clients/welcomeScreen/WelcomeScreen';

const Routes = props => {
  return (
    <div>
      <Route exact path='/' render={props => <LoginClient {...props} />} />
      <PrivateRoute path='/metrics' component={HealthMetric} />
      <PrivateRoute path='/dashboard' component={CoachDashboard} />
      <PrivateRoute path='/dashboard-client' component={ClientDashboard} />
      <PrivateRoute path='/client/:clientid' component={ClientInfo} />
      <PrivateRoute path='/clients' component={ClientsList} />
      <PrivateRoute path='/language/:clientid' component={ChooseLanguage} />
      <PrivateRoute path='/translator' component={TestTranslator} />
      <PrivateRoute path='/metric-form' component={HealthMetricForm} />
      <PrivateRoute path='/welcome' component={Welcome} />
    </div>
  );
};

// const mapStatetoProps = state => {
//     // console.log('App.js', state)
//     return {
//         clientinfo : state.clientinfio
//     }
// }

export default Routes;
