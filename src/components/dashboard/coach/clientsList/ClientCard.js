import React from "react";
import { withRouter } from "react-router-dom";
import "../../../../sass/dashboard/coach/client_list/clientCard.scss";

const ClientCard = (props) => {
	return (
		<div className="test-clientcard" onClick={() => {
			props.setShowInfo(!props.showInfo)
		}}>
			<h4>{props.client.first_name}</h4>
		</div>
	);
};

export default withRouter(ClientCard);
