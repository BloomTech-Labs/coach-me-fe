
import React, { useState } from "react";

import React, { useState, useEffect } from "react";
import { useDispatch,useSelector, connect } from "react-redux";





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
	const [input, setInput] = useState('');
	const data = props.clientLIST;
	const [searchResult, setSearchResult] = useState(data);
	let newList= [];

	useEffect(() => {

		if(input != '') {
			newList = data.filter(word => {
				if(input[0] === input[0].toLowerCase() || input[0] === input[0].toUpperCase() ) {
					// return input[0].toUpperCase()
					return word.first_name.indexOf(input) != -1 || word.last_name.indexOf(input) != -1
				}
			})
			setSearchResult(newList)
			
			console.log('new list',newList)
		}else if(input === '') {
			setSearchResult(data)
		}
		console.log(searchResult)
	}, [input]);



	const handleChange = (e) => {
		setInput(e.target.value);	
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
								placeholder="Client Name"
								name="first_name"
								onChange={handleChange}
							/>
							
						</div>
				
				</form>
				<div className="list-of-clients">

				
				</div>

			</div>
			<div>
				
				{searchResult.length <= 0 ? props.clientLIST.map((client, index) => {
					return (
						<ClientCard key={index}
						client={client}
						showInfo={props.showInfo}
						setShowInfo={props.setShowInfo}
						/>
					);
				}) : searchResult.map((client, index) => {
					return (
						<ClientCard key={index}
						client={client}
						showInfo={props.showInfo}
						setShowInfo={props.setShowInfo}
						/>
					);
				})}
		</div>

		</div>
		

	);
};

const mapStateToProps = (state) => {


	return {
		state: state.coach.data,
		spiderman: state,
		loggedIn: state.auth.loggedIn,
	};
};

export default connect(mapStateToProps)(SearchForm);
