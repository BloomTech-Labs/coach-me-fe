import React from "react";
import { withRouter } from "react-router-dom";
import "../../../../sass/dashboard/coach/client_list/clientCard.scss";

const ClientCard = (props) => {
	return (
		<div className="name-container"onClick={() => {
			props.setShowInfo(!props.showInfo)
		}}>
			<h1>
				{props.client.last_name}, {props.client.first_name}
			</h1>

		</div>
	);
};

export default withRouter(ClientCard);
