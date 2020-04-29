import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import PrivateRoute from './PrivateRoute';
import PrivateCoachRoute from './PrivateCoachRoute';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientDashboard from '../clients/clientDashboard/ClientDashboard';
import HealthMetricForm from '../clients/healthMetricForm/HealthMetricForm';
import RegisterClient from '../clients/registerClient/RegisterClient';
import LoginClient from '../clients/loginClient/LoginClient';
import EmailRequest from '../clients/loginClient/forgotPassword/EmailRequest';
import PasswordReset from '../clients/loginClient/forgotPassword/PasswordReset'
import Welcome from '../clients/welcomeScreen/WelcomeScreen';
import CoachRegistration from '../coach/coachRegistration/coachRegistration';
import LoginCoach from '../coach/loginCoach/LoginCoach';

//Styling
import '../../App.css';

const Routes = props => {
    return (
        <>
            <Route
                path='/register-client'
                render={props => <RegisterClient {...props} />}
            />
            <Route
                exact
                path='/'
                render={props => <LoginClient {...props} />}
            />
            <Route
                path='/email-request'
                render={props => <EmailRequest {...props} />}
            />
            <Route
                path='/password-reset'
                render={props => <PasswordReset {...props} />}
            />

            <Route
                path='/register'
                render={props => <CoachRegistration {...props} />}
            />
            <Route path='/login' component={LoginCoach} />

            <PrivateRoute path='/metrics' component={HealthMetric} />
            <PrivateCoachRoute path='/dashboard' component={CoachDashboard} />
            <PrivateRoute
                path='/dashboard-client'
                component={ClientDashboard}
            />

            <PrivateRoute path='/metric-form' component={HealthMetricForm} />
            <PrivateRoute path='/welcome' component={Welcome} />
        </>
    );
};

export default Routes;
