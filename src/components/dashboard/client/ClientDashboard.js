import React, { useEffect } from "react";
// import Notifications from "./Notifications";
// import ResourceCenter from "./ResourceCenter";
// import SessionNotes from "./SessionNotes";
// import HealthMetric from "../client/health_metrics/HealthMetric";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClientInfo } from "../../../redux/actions/clientActions";
import "../../../sass/dashboard/client/clientDashboard.scss";

const ClientDashboard = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClientInfo());
	}, []);
	// const state = useSelector((state) => state.client);

	return (
		<div className="client-dashboard">
			<div className="tabs-container">
				<div className="notifications">
				<Link className="tab top" to="client-notifications">Notifications</Link>
				<div className="notification-count">5</div>
				</div>
				<Link className="tab" to="resource-center">Resource Center</Link>
				<Link className="tab" to="coach-messages">Coach Messages</Link>
				<Link className="tab" to="track-progess">Track Progress</Link>
			</div>
			<div className="profile-container">
				<div className="profile">
					{<h1>{props.state.first_name}</h1>}
					<div className="condition diabetes">Diabetes</div>
					<div className="condition hbp">HBP</div>
				</div>
				<div className="motivation">

				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data,
	};
};

export default connect(mapStateToProps)(ClientDashboard);
