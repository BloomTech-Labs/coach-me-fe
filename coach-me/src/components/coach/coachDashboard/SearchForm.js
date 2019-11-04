import React, { useState, useEffect } from 'react';
import ClientCard from './clientsList/ClientCard';
import { useDispatch, useSelector } from 'react-redux';
import '../coachDashboard/clientsList/ClientInfo/clientInfo.scss';

const SearchForm = props => {
    const state = useSelector(state => state.coach);
    const clientList = state.clientRecords;
    const [ClientList, setClientList] = useState();
    const [query, setquery] = useState();

    const handleChange = e => {
        console.log(e.target.value);
        e.preventDefault();
        setquery(e.target.value);
    };

    useEffect(() => {
        if (clientList.length > 0) {
            setClientList(clientList);
        }

        if (query) {
            setClientList(
                clientList.filter(client => {
                    const name = client.clientName.toLowerCase();
                    if (name.includes(query)) {
                        return client;
                    }
                })
            );
        }
    }, [query, clientList]);

    return (
        <>
            <form>
                <input
                    className='search-input'
                    onChange={handleChange}
                    placeholder='Search Client'
                    value={query}
                    name='name'
                />
            </form>

            <div>
                {ClientList &&
                    ClientList.map(client => (
                        <ClientCard
                            client={client}
                            setClient={props.setClient}
                        />
                    ))}
            </div>
        </>
    );
};
export default SearchForm;
