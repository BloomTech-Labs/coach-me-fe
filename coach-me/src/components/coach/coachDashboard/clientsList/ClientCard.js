import React from 'react';
import { withRouter } from 'react-router-dom'
;import './clientCard.scss';

const ClientCard = (props) => {
    const {setClient} = props

    

    const handleClick = () => {
        props.history.push(`/client/${props.client.clientId}`);
    };

    return (
        <div className= 'client-card' onClick ={ () =>{setClient(props.client.clientId)}}>
            <h1>{props.client.clientName}</h1>
        </div>
    );
};

export default withRouter(ClientCard);
