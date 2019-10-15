import React from 'react'
import {auth} from '../../../firebase'
import * as firebaseui from 'firebaseui'

auth().useDeviceLanguage();
auth().settings.appVerificationDisabledForTesting = true


const uiconfig = { 

    signInSuccessUrl: 'http://localhost:3000/',
    signInOptions: [
      {
        provider:  auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image',
          size: 'invisible',
        }
      
      },
  ],

  callbacks:{
    signInSuccessWithAuthResult: function (){
      const token = auth().currentUser.getIdToken()
    
     token.then( (res) =>{
      localStorage.setItem('token', JSON.stringify(res))
     })
    }
   }
  
 
  
}

const LoginClient = () =>{
const ui = new firebaseui.auth.AuthUI(auth())
ui.start('#firebaseui-auth-container', uiconfig)


    return (

        <div id='firebaseui-auth-container'></div>

    )

}



export default LoginClient