import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";

const SearchForm = (props) => {
	const state = useSelector((state) => state.coach);
	const clientList = state.clientRecords;
	const [ClientList, setClientList] = useState();
	const [query, setquery] = useState();
	const { setClient } = props;

	const check = (goods) => {
		Array.from(cardlist).filter((item) => {
			const name = item.firstElementChild.textContent;
			if (goods === name) {
				item.classList.add("active1");
			}
			if (goods !== name && item.classList.length === 2) {
				item.classList.remove("active1");
			}
		});
	};

	const cardlist = document.getElementsByClassName(`client-card`);

	const handleChange = (e) => {
		e.preventDefault();
		setquery(e.target.value);
	};

	useEffect(() => {
		if (clientList.length > 0) {
			setClientList(clientList);
		}

		if (query) {
			setClientList(
				clientList.filter((client) => {
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
			<form className="search-form">
				<div className="input-icon">
					<img
						className="magnifying-glass icon"
						alt="magnifying-glass"
						src={magnifying}
					></img>
					<input
						data-cy="search"
						className="search-input"
						onChange={handleChange}
						placeholder="Search Client"
						value={query}
						name="name"
					/>
				</div>
			</form>

			<div className="scroll-list">
				{/* {ClientList &&
                    ClientList.map(client => (
                        <div
                            className='client-card'
                            onClick={() => {
                                if (client.clientName) {
                                    check(client.clientName);
                                }
                                setClient(client.clientId);
                            }}
                        >
                            <ClientCard
                                key={client.clientId}
                                client={client}
                                setClient={props.setClient}
                                check={check}
                            />
                        </div>
                    ))} */}
				<h4 className="aint">You Currently have no clients!</h4>
			</div>
		</>
	);
};
export default SearchForm;
