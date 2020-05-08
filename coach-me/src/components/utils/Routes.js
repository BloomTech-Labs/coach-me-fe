import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
import PasswordReset from '../clients/loginClient/forgotPassword/PasswordReset';
import Welcome from '../clients/welcomeScreen/WelcomeScreen';
import CoachRegistration from '../coach/coachRegistration/coachRegistration';
import LoginCoach from '../coach/loginCoach/LoginCoach';

import AccountOne from '../clients/onboarding/accountCreation/accountOne/AccountOne';

import ProfileOne from '../clients/onboarding/createProfile/profileOne/ProfileOne';
import ProfileThree from '../clients/onboarding/createProfile/profileThree/ProfileThree';
import ProfileFour from '../clients/onboarding/createProfile/profileFour/ProfileFour';
import ProfileFive from '../clients/onboarding/createProfile/profileFive/ProfileFive';
import ProfileSix from '../clients/onboarding/createProfile/profileSix/ProfileSix';

//Styling
import '../../App.css';
import CreateProfile from '../clients/onboarding/CreateProfile';

const Routes = props => {
    return (
        <>
            <Router>
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
                    path='/createProfile'
                    render={props => <CreateProfile {...props} />}
                />

                {/* CREATE ACCOUNT */}
                <Route path='/createAccount' render={props => <AccountOne />} />
                {/* CREATE ACCOUNT */}

                {/* CREATE PROFILE */}
                <Route path='/createProfile1' render={props => <ProfileOne />} />
                <Route path='/createProfile3' render={props => <ProfileThree />} />
                <Route path='/createProfile4' render={props => <ProfileFour />} />
                <Route path='/createProfile5' render={props => <ProfileFive />} />
                <Route path='/createProfile6' render={props => <ProfileSix />} />
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
            </Router>
        </>
    );
};

export default Routes;
