import React,{useState} from 'react'
import UserPhoneNumber from './UserPhoneNumber'
import { connect } from 'react-redux';
import {getClientInfo} from '../../../actions/clientActions'
import './loginClient.scss'


//925-639-1639




const LoginClient = (props) => {
    console.log(props.clientinfo)
    const [config, setconfig]=useState({phonenumber:'',})
 

    const handleChange = e =>{
        setconfig({...config, [e.target.name]: e.target.value})
    }
    const getinfo = (info) =>{
       
        
         
         
         setconfig({...config, phonenumber:info})

         props.getClientInfo(info)
         props.history.push('/welcome')
         
         
     }
    

  
    return (
        <div>


           <UserPhoneNumber
           
           handleChange={handleChange} 
           config={config}
           setconfig={setconfig}
           getinfo ={getinfo}/>

        </div>
       )
    
    
    


        
               
            
        
 
        
           
       
    



}




const mapStatetoProps = state => {
    console.log('App.js', state)
    return {
        clientinfo : state.clientinfo
    }
}


  
export default connect(
    mapStatetoProps,
    { getClientInfo }
)(LoginClient);

