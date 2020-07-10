import React, { useState } from "react";

import { searchClients } from "../../../redux/actions/searchActions";

import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";

const SearchForm = (props) => {
	console.log("search form props", props.coachID);
	const [input, setInput] = useState({ firstname: "", lastname: "" });

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
		searchClients({
			...input,
			id: props.coachID,
		});
	};

	return (
		<div className="search-container">
			<div className="searchbar">
				<form className="search-form">
					<img
						className="magnifying-glass icon"
						alt="magnifying-glass"
						src={magnifying}
					/>
					<div className="input-values">
						<input
							className="search-input"
							// onChange={handleChange}
							placeholder="First Name"
							// value={query}
							name="first_name"
							value={input.firstname}
							onChange={handleChange}
						/>
						<input
							className="search-input"
							placeholder="Last Name"
							name="last_name"
							value={input.lastname}
							onChange={handleChange}
						/>
					</div>
				</form>
			</div>
				{props.clientLIST.map((client, index) => {
					return (
						<ClientCard key={index}
						client={client}
						showInfo={props.showInfo}
						setShowInfo={props.setShowInfo}
						/>
					);
				})}
		</div>
	);
};
export default SearchForm;
