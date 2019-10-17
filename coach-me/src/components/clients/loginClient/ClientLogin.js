import React,{useState} from 'react'
import UserPhoneNumber from './UserPhoneNumber'
import UserLanguage from './UserLanguage'

import SoftWelcome from './SoftWelcome'

const ClientLogin = () => {
    const [step, setStep]=useState(1)
    const [config, setconfig]=useState({phonenumber:'', language:'',})

    const next = () =>{
        setStep(step+1)
    }
    const back = () =>{
        setStep(step -1)
    }

    const handleChange = e =>{
        setconfig({...config, [e.target.name]: e.target.value})
    }
  
    return (
        <div>

        {( () =>{

    switch(step) {
        case 1:  
       return (
        <div>
       <h1> Coach Me</h1>
        <button onClick={next}> 
        next</button>
        </div>
       )
        
    case 2:
       return (
           <UserPhoneNumber
           back={back}
           next={next} 
           handleChange={handleChange} 
           config={config}
           setconfig={setconfig}/>
       )
    case 3 :
    return (<UserLanguage
    back={back}
    next={next} 
    handleChange={handleChange} 
    config={config} />
    )
    case 4 : 
    return (
        <SoftWelcome
    back={back}
    next={next} 
    config={config}
    />

    )

       default:
    return null
    } 
    


        }
               
            
        
    )()}
        
           
        </div>
    )
}

export default  ClientLogin