import React from 'react';
import { withRouter } from 'react-router-dom'
;import './clientCard.scss';

const ClientCard = (props) => {
    const {setClient, key} = props

    

   

    return (
        <div className= 'client-card' onClick ={ () =>{
           console.log(key)
            setClient(props.client.clientId)}}>
            <h1>{props.client.clientName}</h1>
        </div>
    );
};

export default withRouter(ClientCard);
