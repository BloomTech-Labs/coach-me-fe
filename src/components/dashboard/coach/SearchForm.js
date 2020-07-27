import React, { useState, useEffect } from "react";
import { getCoach } from "../../../redux/actions/authActions";
import { getClientList, getUnassignedClients } from "../../../redux/actions/coachActions";
import {connect,useDispatch, useSelector} from "react-redux";
import ClientPicker from './ClientPicker';
import ClientCard from "../coach/clientsList/ClientCard";

// Styling
import "../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";
import magnifying from "../../../utils/assets/icons/magnifying_glass.svg";
import CoachDashboard from "./CoachDashboard";

//changes

const SearchForm = (props) => {
	const clientList = useSelector((state) => state.coach.clientList);
	const dispatch = useDispatch();
	const currentCoachID = props.state.id;
	const [showInfo, setShowInfo] = useState(false);
	const [gettingClients, setGettingClients]=useState(false);
	const [input, setInput] = useState('');
	const data = props.clientLIST;
    const [searchResult, setSearchResult] = useState(data);
    let newList= [];
    
    useEffect(() => {
			if(props.state.id){
				dispatch(getClientList(currentCoachID));
			}
	}, [currentCoachID])
	// console.log("clientList", clientList);

	useEffect(() => {
		if(input != '') {
			newList = data.filter(word => {
				if(input[0] === input[0].toLowerCase() || input[0] === input[0].toUpperCase() ) {
					// return input[0].toUpperCase()
					return word.first_name.indexOf(input) != -1 || word.last_name.indexOf(input) != -1
				}
			})
			setSearchResult(newList)
			
		}else if(input === '') {
			setSearchResult(data)
		}
	}, [input]);
	
	const handleChange = (e) => {
		setInput(e.target.value);		
	};

	return (
		<div data-testid="search-form" className="search-container">
			<div className="searchbar">
				<img
				className="magnifying-glass icon"
				alt="magnifying-glass"
				src={magnifying}
				/>
				<form className="search-form">
					<input
					className="search-input"
					placeholder="Client Name"
					name="first_name"
					onChange={handleChange}
					/>
				</form>
			</div>
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
			<button className='getem' onClick={()=>setGettingClients(!gettingClients)}>
				{gettingClients? "Cancel" : "Get Clients"}
			</button>
			{gettingClients ? <ClientPicker /> : ''}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.coach.data,
		clientList: state.coach.clientList,
		loggedIn: state.auth.loggedIn,
	};
};
export default connect(mapStateToProps)(SearchForm);
