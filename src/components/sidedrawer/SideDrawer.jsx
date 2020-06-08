import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../.././assets/coachmelogo-white.svg";
import Backdrop from "../../utils/UI/Backdrop";
import UIContext from "../../utils/context/UIContext";
import axiosWithCred from "../../utils/axiosWithCred";

import "./sideDrawer.scss";
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
					<Link to="/">Home</Link>
					<Link to="/dashboard">Dashboard</Link>
					<Link to="/">Support</Link>
					<Link onClick={logout} to="/">
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		loggedIn: state.loggedIn,
	};
};

export default connect(mapStateToProps)(SideDrawer);
