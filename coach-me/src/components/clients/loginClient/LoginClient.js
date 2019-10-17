import React from 'react';
import { auth } from '../../../firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './loginClient.scss';

import { connect } from 'react-redux';
import {getClientInfo} from '../../../actions/clientActions'
auth().useDeviceLanguage();
auth().settings.appVerificationDisabledForTesting = true;
//925-639-1639





const LoginClient = (props) => {


    const uiconfig = {
        signInFlow: 'popup',
        signInSuccessUrl: 'http://localhost:3000/',
        signInOptions: [
            {
                provider: auth.PhoneAuthProvider.PROVIDER_ID,
                recaptchaParameters: {
                    size: 'invisible'
                }
            }
          
          
          
      ],
    
      callbacks:{
        signInSuccessWithAuthResult: function (){
          const token = auth().currentUser.getIdToken()
          const phone = auth().currentUser.phoneNumber.toString().slice(2,)
          
        
         token.then( (res) =>{
           localStorage.setItem('token',res)
           localStorage.setItem('phone',phone)
           
           
         }).then( ()=>{
          const num = localStorage.getItem('phone')
          props.getClientInfo(num)
          
         })
         
        },
        
        
       }
      
     
      
    }
    console.log(props.clientinfo)

    return (
        <div className='auth-container'>
            <h1>Coach Me</h1>
            <StyledFirebaseAuth uiConfig={uiconfig} firebaseAuth={auth()} />
        </div>
    );
    
};




const mapStatetoProps = state => {
    console.log('App.js', state)
    return {
        clientinfo : state.clientinfio
    }
}

export default connect(
    mapStatetoProps,
    { getClientInfo }
)(LoginClient);

