import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ClientCard from './ClientCard';
import SearchForm from '../SearchForm';

const ClientsList = props => {
    //    useEffect( () =>{
    //        setclientList(state.clientRecords)
    //    },[state.clientRecords])
    //  console.log(clientList)

<<<<<<< HEAD
    console.log('props:', props);
    return <div>{/* <SearchForm setClient={props.setClient} /> */}</div>;
=======
    return (
        <div>
            <SearchForm setClient={props.setClient} />
        </div>
    );
>>>>>>> 4a616ee18d699d0e8a7431c4936db5aa15c1c831
};

export default ClientsList;
