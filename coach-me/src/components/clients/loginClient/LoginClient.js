import React from 'react'
import {auth} from '../../../firebase'
import axios from 'axios'
import * as firebaseui from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import './loginClient.scss'

auth().useDeviceLanguage();
auth().settings.appVerificationDisabledForTesting = true


const uiconfig = { 
    signInFlow:'popup',
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
      const phone = auth().currentUser.phoneNumber.toString().slice(2,)
      
    
     token.then( (res) =>{
       localStorage.setItem('token',res)
       localStorage.setItem('phone',phone)
       
       
     }).then( ()=>{
      const num = localStorage.getItem('phone')
      console.log(num)
      axios.get(`https://api.airtable.com/v0/appcGDj4SuiTu3Nte/Intake?api_key=keytu1to8j0ODW8sD&maxRecords=1&view=Grid%20view&phone=${num}`).then( res =>{
        console.log(res)
      }).catch( err =>{
        console.log(err)
      })
     })
     
    },
    
    // getuserdata: function (){
      
    // }
   }
  
 
  
}

const LoginClient = () =>{

  


    return (
      <div className ='auth-container'>
        <h1>Coach Me</h1>
    <StyledFirebaseAuth uiConfig={uiconfig} firebaseAuth={auth()}/>
    </div>
        

    )

}



export default LoginClient