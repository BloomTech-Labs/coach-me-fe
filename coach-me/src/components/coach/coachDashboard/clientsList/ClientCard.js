import React from 'react';
import { withRouter } from 'react-router-dom';
import './clientCard.scss';

const ClientCard = props => {
    const { setClient } = props;

    return (
        <div
            className='client-card'
            onClick={() => {
                // <div className ={`${type=== 2 ?'live-message' : 'active' } ` } active={type === 1} left
                //onClick={() => {setType(1)

                setClient(props.client.clientId);
            }}
        >
            <h1>{props.client.clientName}</h1>
        </div>
    );
};

export default withRouter(ClientCard);
