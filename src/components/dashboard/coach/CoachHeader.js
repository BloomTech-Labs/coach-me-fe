import React, { useState } from "react";
import "../../../sass/dashboard/coach/coachHeader.scss";
import coachMeIcon from "../../../utils/assets/logo/1coachHeader.svg";
import Coach from "../../../utils/assets/logo/2coachHeader.svg";
import Me from "../../../utils/assets/logo/3coachHeader.svg";
import { ReactComponent as DownArrow } from "../../../utils/assets/icons/downArrow.svg";
import { ReactComponent as UpArrow } from "../../../utils/assets/icons/upArrow.svg";

const CoachHeader = (props) => {
	// const state = useSelector((state) => state.auth);
	// const [coachName, setCoachName] = useState('');
	const [toggle, setToggle] = useState(false);
	const coachName = localStorage.getItem("coachName");

	// const toggleLogout = () => {};

	const logout = () => {
		localStorage.clear();
		props.history.push("/login");
	};

	return (
		<div className="coach-header">
			<div className="header-icon">
				<a href="https://www.coachmehealth.org">
					<img
						className="coachMeIcon"
						alt="coachMeIcon"
						src={coachMeIcon}
					></img>
					<img className="Coach" alt="Coach" src={Coach}></img>
					<img className="Me" alt="Me" src={Me}></img>
				</a>
			</div>
			<div className="small-profile">
				<h3>{coachName}</h3>

				<DownArrow
					onClick={(e) => setToggle(true)}
					className={`arrow ${toggle ? "hide" : null}`}
				/>
				<UpArrow
					onClick={(e) => setToggle(false)}
					className={`arrow ${!toggle ? "hide" : null}`}
				/>
				<button
					onClick={(e) => logout()}
					className={`menu ${!toggle ? "hide" : null}`}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default CoachHeader;
