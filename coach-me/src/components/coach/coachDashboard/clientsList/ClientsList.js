import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientCard from './ClientCard';

const ClientsList = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios
            .get(
                'https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Master?api_key=keyfahybUIpBkegFv'
            )
            .then(res => setUsers(res.data.records))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <h1>Clients</h1>
            {users && users.map(client => <ClientCard client={client} />)}
        </div>
    );
};

export default ClientsList;
