import React from 'react';
import { Route } from 'react-router-dom';

// Component Imports
import PrivateRoute from './PrivateRoute';
import PrivateCoachRoute from './PrivateCoachRoute';
import HealthMetric from '../clients/healthMetrics/HealthMetric';
import CoachDashboard from '../coach/coachDashboard/CoachDashboard';
import ClientDashboard from '../clients/clientDashboard/ClientDashboard';
import HealthMetricForm from '../clients/healthMetricForm/HealthMetricForm';
import LoginClient from '../clients/loginClient/LoginClient';
import Welcome from '../clients/welcomeScreen/WelcomeScreen';
import CoachRegistration from '../coach/coachRegistration/coachRegistration';
import FormLogin from '../clients/loginClient/formLogin';
import LoginCoach from '../coach/loginCoach/LoginCoach';
import ProfileFour from '../clients/onboarding/profileFour/ProfileFour';
import ProfileFive from '../clients/onboarding/profileFive/ProfileFive';

//Styling
import '../../App.css';

const Routes = props => {
    return (
        <>
            <Route
                exact
                path='/'
                render={props => <LoginClient {...props} />}
            />
            <Route
                path='/formLogin'
                render={props => <FormLogin {...props} />}
            />
            {/* CREATE PROFILE */}
            <Route path='/createProfile4' render={props => <ProfileFour />} />
            <Route path='/createProfile5' render={props => <ProfileFive />} />
            {/* CREATE PROFILE */}

            <Route
                path='/register'
                render={props => <CoachRegistration {...props} />}
            />
            <Route path='/login' component={LoginCoach} />

            <Route path='/metrics' component={HealthMetric} />
            <Route path='/dashboard' component={CoachDashboard} />
            <Route path='/dashboard-client' component={ClientDashboard} />

            <Route path='/metric-form' component={HealthMetricForm} />
            <Route path='/welcome' component={Welcome} />
        </>
    );
};

export default Routes;
