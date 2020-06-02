import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ClientCard from './ClientCard';
import SearchForm from '../SearchForm';

const ClientsList = props => {
    //    useEffect( () =>{
    //        setclientList(state.clientRecords)
    //    },[state.clientRecords])
    //  console.log(clientList)

    return (
        <div>
            <SearchForm setClient={props.setClient} />
            <h4>You currently have no clients!</h4>
        </div>
    );
};

export default ClientsList;
