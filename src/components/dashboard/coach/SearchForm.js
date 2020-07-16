
import React, { useState } from "react";

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


import { searchClients } from "../../../redux/actions/searchActions";


import React, { useState, useEffect } from "react";
import { getCoach } from "../../../redux/actions/authActions";
import { getClientList } from "../../../redux/actions/coachActions";
import {connect,useDispatch, useSelector} from "react-redux";
import ClientPicker from './ClientPicker';

import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";
import CoachDashboard from "./CoachDashboard";



const SearchForm = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.coach.data);
	const clientList = useSelector((state) => state.coach.clientList);

	const [query, setquery] = useState();
	const [gettingClients, setGettingClients]=useState(false);
	const currentCoachID = props.state.id;
	
	useEffect(() => {
		dispatch(getCoach());	
	}, []);

	useEffect(() => {
		dispatch(getClientList(currentCoachID));
	}, [currentCoachID])
	console.log("clientList", clientList);

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

	// useEffect(() => {
	// 	if (clientList.length > 0) {
	// 		setClientList(clientList);
	// 	}

	// 	if (query) {
	// 		setClientList(
	// 			clientList.filter((client) => {
	// 				const name = client.clientName.toLowerCase();
	// 				if (name.includes(query)) {
	// 					return client;
	// 				}
	// 			})
	// 		);
	// 	}
	// }, [query, clientList]);

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

const mapStateToProps = (state) => {
	// console.log("CoachDashboard State", state);
	return {
		state: state.coach.data,
		clientList: state.coach.clientList,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(SearchForm);
