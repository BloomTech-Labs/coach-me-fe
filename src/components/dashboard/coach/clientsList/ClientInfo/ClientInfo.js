import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLastCheckInTime } from "../../../../../redux/actions/coachActions";

//Component Imports
import MotiveModal from "./MotiveModal";
//Styling
import "../../../../../sass/dashboard/coach/client_list/client_info/clientInfo.scss";

const ClientInfo = (props) => {
	const state = useSelector((state) => state.coach);
	const dispatch = useDispatch();

	const [show, setshow] = useState(false);
	const { clientprofile } = props;

	useEffect(() => {
		if (clientprofile && clientprofile.clientId) {
			dispatch(getLastCheckInTime(clientprofile.clientId));
		}
		// eslint-disable-next-line
	}, [clientprofile]);

	const toggleModal = (e) => {
		setshow(!show);
	};

	let checkIn;
	if (isNaN(state.clientCheckIn)) {
		checkIn = "0";
	} else {
		checkIn = state.clientCheckIn;
	}

	if (clientprofile) {
		return (
			<div className="clientprofile">
				<div className="checkin">
					<p className="checkin-label">LAST CHECK-IN </p>
					<p className="checkin-date">{`${checkIn} days ago`}</p>
				</div>
				<MotiveModal
					toggleModal={toggleModal}
					motivation={clientprofile.motivations}
					show={show}
				/>
				<div
					className={`${
						clientprofile.motivations ? "motivations" : "ghost"
					} `}
				>
					<div data-testid="motivation-text" className="motivation-text">
						<label>Motivation:</label>
						<p> {`"${clientprofile.motivations}"`}</p>

						<button
							className="seemore"
							onClick={() => toggleModal()}
						>
							{" "}
							...See more
						</button>
					</div>
				</div>
			</div>
		);
	}
	return null;
};

export default ClientInfo;
