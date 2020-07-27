import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

// Component Imports
import PrivateRoute from "../utils/PrivateRoute";
// import PrivateCoachRoute from "../utils/PrivateCoachRoute";
import HealthMetric from "../components/dashboard/client/health_metrics/HealthMetric";

// Coach components
import CoachDashboard from "../components/dashboard/coach/CoachDashboard";
import CoachNotifications from "../components/dashboard/coach/notificationCenter/CoachNotifications";
import CoachResourceCenter from "../components/dashboard/coach/notificationCenter/CoachResourceCenter";
import CoachMessaging from "../components/dashboard/coach/notificationCenter/coachMessaging/CoachMessaging";

import ClientDashboard from "../components/dashboard/client/ClientDashboard";
import Notifications from "../components/dashboard/client/Notifications";
import ResourceCenter from "../components/dashboard/client/ResourceCenter";
import HealthMetricForm from "../components/dashboard/client/health_metrics/healthMetricForm/HealthMetricForm";
import LoginClient from "../components/login/client/LoginClient";
import EmailRequest from "../components/login/client/forgotPassword/EmailRequest";
import PasswordReset from "../components/login/client/forgotPassword/PasswordReset";
// import Welcome from "../clients/welcomeScreen/WelcomeScreen";
import CoachRegistration from "../components/register/coach/coachRegistration";
import LoginCoach from "../components/login/coach/LoginCoach";
import AccountOne from "../components/register/client/onboarding/accountCreation/accountOne/AccountOne";
import Splash from "../components/splash_page/Splash";
import ProfileOne from "../components/register/client/onboarding/createProfile/profileOne/ProfileOne";
import ProfileThree from "../components/register/client/onboarding/createProfile/profileThree/ProfileThree";
import ProfileFour from "../components/register/client/onboarding/createProfile/profileFour/ProfileFour";
import ProfileFive from "../components/register/client/onboarding/createProfile/profileFive/ProfileFive";
import ProfileSix from "../components/register/client/onboarding/createProfile/profileSix/ProfileSix";
import VideoChat from '../components/video_call/VideoChat';

//Styling
import "../App.css";
import SearchForm from "../components/dashboard/coach/SearchForm";

const Routes = (props) => {
	return (
		<>
			
			

				{/* //  COACH ROUTES  // */}
				{/* // COACH REGISTER // */}
				<Route
					path="/coach-register"
					render={(props) => <CoachRegistration {...props} />}
				/>

				{/* //  COACH LOGIN  // */}
				<Route path="/coach-login" component={LoginCoach} />

				{/* //  COACH DASHBOARD  // */}
				<PrivateRoute path="/dashboard" component={CoachDashboard} />
				<Route
					path="/coach-notifications"
					component={CoachNotifications}
				/>
				<PrivateRoute
					path="/coach-resource-center"
					component={CoachResourceCenter}
				/>
				<PrivateRoute
					path="/coach-messages"
					component={CoachMessaging}
				/>

				<PrivateRoute path="/search-clients" component={SearchForm} />

				{/* // CLIENT ROUTES //  */}
				{/* //  CLIENT REGISTER  // */}
				<Route path="/createAccount" component={AccountOne} />
				<Route
					path="/createProfile1"
					render={(props) => <ProfileOne />}
				/>
				<Route
					path="/createProfile3"
					render={(props) => <ProfileThree />}
				/>
				<Route
					path="/createProfile4"
					render={(props) => <ProfileFour />}
				/>
				<Route
					path="/createProfile5"
					render={(props) => <ProfileFive />}
				/>
				<Route
					path="/createProfile6"
					render={(props) => <ProfileSix />}
				/>

				{/* //  CLIENT LOGIN  // */}
				<Route
					exact
					path="/client-login"
					render={(props) => <LoginClient {...props} />}
				/>
				<Route path="/metrics" component={HealthMetric} />
				<Route path="/chat" component={VideoChat} />
				<PrivateRoute
					path="/coach-notifications"
					component={CoachNotifications} />
					
				<Route
					path="/email-request"
					render={(props) => <EmailRequest {...props} />}
				/>

				<Route
					path="/password-reset"
					render={(props) => <PasswordReset {...props} />}
				/>

				{/* //  CLIENT DASHBOARD  // */}
				<Route path="/metrics" component={HealthMetric} />
				<PrivateRoute
					path="/dashboard-client"
					component={ClientDashboard}
				/>
				<PrivateRoute
					path="/client-notifications"
					component={Notifications}
				/>
				<PrivateRoute
					path="/resource-center"
					component={ResourceCenter}
				/>
				<PrivateRoute
					path="/metric-form"
					component={HealthMetricForm}
			/>
				{/* //  HOME ROUTES  // */}
				<Route exact path="/" component={Splash} />
			
		</>
	);
};

export default Routes;
