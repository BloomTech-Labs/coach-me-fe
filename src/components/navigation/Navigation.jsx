import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UIContext from "../../utils/context/UIContext";
import { ReactComponent as Logo } from "../../utils/assets/logo/coachmelogo-white.svg";
import "../../sass/navigation/navigation.scss";
import axiosWithCred from "../../utils/axiosWithCred";
import { connect } from "react-redux";

const Navigation = (props) => {
	const { backdropHandler, drawerOpen } = useContext(UIContext);
	const logout = () => {
		axiosWithCred
			.post(`${process.env.REACT_APP_BACKEND}/auth/logout`)
			.then((res) => {
				window.location = "/";
			});
	};

	return (
		<nav className="navigation">
			<Link to="/" onClick={() => (window.location = "/")}>
				<Logo />
			</Link>
			<div className="nav-links">
				{/* <Link to="/">Home</Link>
				<Link to="/dashboard-client">Dashboard</Link>
				<Link to="/">Support</Link> */}

				{props.state.id || props.loggedIn ? (
					<Link onClick={logout} to="/">
						Logout
					</Link>
				) : (
					""
				)}
			</div>
			<i
				onClick={backdropHandler}
				className={
					drawerOpen
						? "fas fa-bars fa-3x rotate"
						: "fas fa-bars fa-3x"
				}
			></i>
		</nav>
	);
};
const mapStateToProps = (state) => {
	return {
		state: state.coach.data,
		loggedIn: state.client.loggedIn,
	};
};
export default connect(mapStateToProps)(Navigation);
