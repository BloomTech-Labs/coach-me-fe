import React from 'react';
import { auth } from '../../../firebase';
import * as firebaseui from 'firebaseui';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './loginClient.scss';
auth().useDeviceLanguage();
auth().settings.appVerificationDisabledForTesting = false;

const uiconfig = {
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
        {
            provider: auth.PhoneAuthProvider.PROVIDER_ID,
            recaptchaParameters: {
                type: 'image',
                size: 'invisible'
            }
        }
    ],

    callbacks: {
        signInSuccessWithAuthResult: function() {
            const token = auth().currentUser.getIdToken();

            token.then(res => {
                localStorage.setItem('token', JSON.stringify(res));
            });
        }
    }
};

const LoginClient = () => {
    return (
        <div className='auth-container'>
            <h1>Coach Me</h1>
            <StyledFirebaseAuth uiConfig={uiconfig} firebaseAuth={auth()} />
        </div>
    );
};

export default LoginClient;
