import React from 'react';
import { withRouter } from 'react-router-dom';
import './clientCard.scss';

const ClientCard = props => {
    const { setClient, check } = props;

    return (
        <div
            onClick={() => {
                check(props.client.clientName);
                setClient(props.client.clientId);
            }}
        >
            <h1>{props.client.clientName}</h1>
        </div>
    );
};

export default withRouter(ClientCard);
