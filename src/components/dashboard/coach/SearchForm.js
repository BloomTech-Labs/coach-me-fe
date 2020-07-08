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

	const handleChange = (e) => {
		e.preventDefault();
		setquery(e.target.value);
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
			<button 
			onClick={()=>setGettingClients(!gettingClients)}
			>{gettingClients? "nvm" : "Get Clients"}</button>
			{clientList.length < 1 ? <div className="aint"> <h4>You Currently have no clients!</h4> 
			
			</div> : clientList.map((item,i) => {
				return (
					<div className='client-in-dashboard'>
						<p>{item.first_name}</p>
						<p>{item.last_name}</p>
					</div>
				
				)
			})}
			</div>
			{gettingClients ? <ClientPicker /> : ''}
		</>
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
