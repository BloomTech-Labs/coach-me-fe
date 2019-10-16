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

const Routes = () => {
    return (
        <div>
            <Route path='/metrics' component={HealthMetric} />
            <Route path='/dashboard' component={CoachDashboard} />
            <Route path='/dashboard-client' component={ClientDashboard} />
            <Route path='/client/:clientid' component={ClientInfo} />
            <Route path='/clients' component={ClientsList} />
            <Route path='/language/:clientid' component={ChooseLanguage} />
            <Route path='/translator' component={TestTranslator} />
        </div>
    );
};

export default Routes;
