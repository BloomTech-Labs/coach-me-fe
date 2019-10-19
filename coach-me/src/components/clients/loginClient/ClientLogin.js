import React,{useState} from 'react'
import UserPhoneNumber from './UserPhoneNumber'
import './loginClient.scss'


const ClientLogin = () => {
    const [config, setconfig]=useState({phonenumber:'',})
 

    const handleChange = e =>{
        setconfig({...config, [e.target.name]: e.target.value})
    }

  
    return (
        <div>


           <UserPhoneNumber
           
           handleChange={handleChange} 
           config={config}
           setconfig={setconfig}/>

        </div>
       )
    
    
    


        
               
            
        
 
        
           
       
    
}

export default  ClientLogin