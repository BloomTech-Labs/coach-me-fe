import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";

const SearchForm = (props) => {
	useEffect(() => {}, []);

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
						// onChange={handleChange}
						placeholder="Search Client"
						// value={query}
						name="name"
					/>
				</div>
			</form>

			{props.clientLIST.map((client, index) => {
				return (
					<ClientCard key={index}
					client={client}
					showInfo={props.showInfo}
					setShowInfo={props.setShowInfo}
					/>
				);
			})}
		</>
	);
};
export default SearchForm;
