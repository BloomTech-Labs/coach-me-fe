import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { searchClients } from "../../../redux/actions/searchActions";

import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";

const SearchForm = (props) => {
	const [showInfo, setShowInfo] = useState(false);
	const dispatch = useDispatch();
	// console.log("search form props", props.coachID);
	const [input, setInput] = useState({ firstname: "", lastname: "" });
	const [searchResult, setSearchResult] = useState([]);
	const actualList = props.clientLIST;

	useEffect(() => {
		// if (input.length) {
		// 	return searchResult;
		// }
		// return actualList;
	}, [input]);

	const handleChange = (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
		dispatch(
			searchClients({
				...input,
				id: props.coachID,
			})
		);
	};

	return (
		<div data-testid="search-form" className="search-container">
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


						<div className="input-values">
							<input
								className="search-input"
								// onChange={handleChange}
								placeholder="First Name"
								// value={query}
								name="first_name"
								// value={input.firstname}
								onChange={handleChange}
							/>
							<input
								className="search-input"
								placeholder="Last Name"
								name="last_name"
								// value={input.lastname}
								onChange={handleChange}
							/>
							
						</div>
					</div>
				</form>
				<div className="list-of-clients">
					{searchResult.length > 0
						? searchResult.map((client, index) => {
								return (
									<ClientCard key={index} 
									client={client}
									showInfo={props.showInfo}
									setShowInfo={props.setShowInfo} />
								);
						  })
						: actualList.map((client, index) => {
								return (
									<ClientCard key={index} 
									client={client}
									showInfo={props.showInfo}
									setShowInfo={props.setShowInfo} />
								);
						  })}
				</div>

			</div>
		</div>
		
	);
};
export default SearchForm;
