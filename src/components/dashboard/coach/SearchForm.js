import React, { useState } from "react";
import axios from "axios";

import { useSelector } from "react-redux";

import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";

const SearchForm = (props) => {
	console.log("search form props", props);
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [loading, setLoading] = useState(false);
	const [alert, setAlert] = useState(null);

	const searchClients = async (id, firstname, lastname) => {
		setLoading(true);

		const res = await axios.get(
			`${process.env.REACT_APP_BACK_END_URL}/${id}/search?first_name=${firstname}&last_name=${lastname}`
		);

		console.log("search re.data", res.data);
		setLoading(false);
	};

	const clearSearch = () => {
		setFirstname([]);
		setLastname([]);
		setLoading(false);
	};

	// const showAlert = (msg, type) => {
	// 	setAlert({ msg, type });

	// 	setTimeout(() => setAlert(null), 5000);
	// };

	const onChange = (e) => {};

	const onSubmit = (e) => {
		e.preventDefault();
		// if (firstname === "" || lastname === "") {
		// 	showAlert("Please enter a name in the search.");
		// }
	};

	return (
		<>
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
								data-cy="search"
								className="search-input"
								// onChange={handleChange}
								placeholder="First Name"
								// value={query}
								name="first_name"
								value="first_name"
							/>
							<input
								className="search-input"
								placeholder="Last Name"
								name="last_name"
								value="last_name"
							/>

							<div className="button">
								<button>
									<label>send</label>
								</button>
							</div>
							{/* {showClear && (
							<button
								className="btn btn-light btn-block"
								onClick={clearUsers}
							>
								Clear
							</button>
						)} */}
						</div>
					</form>
				</div>
				<div className="list-of-clients">
					{props.clientLIST.map((client, index) => {
						return <ClientCard key={index} client={client} />;
					})}
				</div>
			</div>
		</>
	);
};
export default SearchForm;
