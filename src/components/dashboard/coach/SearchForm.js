import React, { useState, useEffect } from "react";
import { useDispatch,useSelector, connect } from "react-redux";



import ClientCard from "../coach/clientsList/ClientCard";
// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";
import CoachDashboard from "./CoachDashboard";



const SearchForm = (props) => {
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

	console.log(searchResult)

	const handleChange = (e) => {
		setInput(e.target.value);	
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
