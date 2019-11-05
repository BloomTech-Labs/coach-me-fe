import React, { useState} from 'react';
//Component Imports
import MotiveModal from './MotiveModal'
//Styling
import './clientInfo.scss';

const ClientInfo = (props) => {
    const [show, setshow ] = useState(false);
    const {clientprofile} = props

    const toggleModal = (e)=> {
      setshow(!show)

    

    }
  if(clientprofile){
    return (
      
        <div className = 'clientprofile'>
        <h6>LAST CHECK-IN</h6>
        <MotiveModal toggleModal={toggleModal} motivation={clientprofile.motivations} show={show}/>
            <div className = 'key-details'>
            <h1>
                
             {clientprofile.clientName}
            </h1>
            <div className = 'details'>
            <div className ="condition-container">
            {clientprofile.conditions.map( conditions =>
                <p>{conditions}</p>
            

            )}
            </div>
            
            <p>{clientprofile.language}</p>
            </div>
            </div>
            <div className={`${clientprofile.motivations ?'motivations' : 'ghost' } ` } >
             <label>
                Motivation:
            </label>
            <div className="text-container">
            
            <p> {clientprofile.motivations}</p>
            </div>

            <button onClick={ () => toggleModal ()}> ...See More</button>
            
            
            </div>
        </div>
    );
  }
  return null

    
};

export default ClientInfo;
