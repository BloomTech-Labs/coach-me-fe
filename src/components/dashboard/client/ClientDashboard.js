import React, { useEffect } from "react";
import Notifications from "./Notifications";
import ResourceCenter from "./ResourceCenter";
import SessionNotes from "./SessionNotes";
import HealthMetric from "../client/health_metrics/HealthMetric";
import ImageCircle from './imageUploader/ImageCircle';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getClientInfo } from "../../../redux/actions/clientActions";
import "../../../sass/dashboard/client/clientDashboard.scss";

const ClientDashboard = (props) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getClientInfo());
	}, []);
	const state = useSelector((state) => state.client);

	return (
		<div className="client-dashboard">
			<div className="profile-container">
				<ImageCircle />
				{<h4>Welcome, {props.state.first_name}!</h4>}
			</div>
			<Notifications />
			<ResourceCenter />
			<SessionNotes />
			<HealthMetric />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data,
	};
};

export default connect(mapStateToProps)(ClientDashboard);
