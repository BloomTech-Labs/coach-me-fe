import React from "react";

import SearchForm from "../SearchForm";

const ClientsList = (props) => {
	return (
		<div>
			<SearchForm setClient={props.setClient} />
			<h4>You currently have no clients!</h4>
		</div>
	);
};

export default ClientsList;
