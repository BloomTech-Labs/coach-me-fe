import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../utils/assets/logo/coachmelogo-white.svg";
import Backdrop from "../../utils/UI/Backdrop";
import UIContext from "../../utils/context/UIContext";
import axiosWithCred from "../../utils/axiosWithCred";

import "../../sass/side_drawer/sideDrawer.scss";
const SideDrawer = (props) => {
	const { drawerOpen, backdropHandler } = useContext(UIContext);
	useEffect(() => {}, []);

	const logout = () => {
		localStorage.clear();

		axiosWithCred
			.post(`${process.env.REACT_APP_BACKEND}/auth/logout`, {
				withCredentials: true,
			})
			.then((res) => {
				window.location = "/";
			});
	};
	return (
		<div>
			<Backdrop show={drawerOpen} set={backdropHandler} />
			<div className={drawerOpen ? "sidedrawer-open" : "sidedrawer"}>
				<Logo className="logo" />
				<div className="nav">
				{props.state.user_type === 'client' ?
				<div>
				<Link to="/dashboard-client">Home</Link>
				<Link data-testid="notifications" className="tab notifications" to="client-notifications"><p>Notifications</p><div className="count">2</div></Link>
				<Link data-testid="resources" to="/resource-center">Resources</Link>
				<Link data-testid="messges" to="/coach-messages">Messages</Link>
				<Link data-testid="health-form" to="/metric-form">Health Form</Link>
				<Link data-testid="chat" to="/chat">Video Chat</Link>
				<Link onClick={logout} to="/">
						Logout
					</Link>
				</div> : <div>
				<Link to="/">Home</Link>
					<Link onClick={logout} to="/">
						Logout
					</Link>
				</div> }
					
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		state: state.client.client_data,
		loggedIn: state.loggedIn,
	};
};

export default connect(mapStateToProps)(SideDrawer);
