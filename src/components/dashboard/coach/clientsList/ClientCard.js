import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from "react-router-dom";
import { updateSelectedClient, getClientGoals } from "../../../../redux/actions/coachActions";
import "../../../../sass/dashboard/coach/client_list/clientCard.scss";

const ClientCard = (props) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.coach);
	return (
		<div className="name-container"onClick={() => {
			props.setShowInfo(!props.showInfo)
			dispatch(updateSelectedClient(props.client))
			dispatch(getClientGoals(state.data.id, props.client.id));
		}}>
			<h1>
				{props.client.last_name}, {props.client.first_name}
			</h1>

		</div>
	);
};

export default withRouter(ClientCard);
