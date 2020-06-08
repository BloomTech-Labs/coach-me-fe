import React from "react";

import { ReactComponent as Exit } from "../../../../utils/assets/icons/Xicon.svg";
import "../../../../sass/dashboard/coach/coach_messaging/scheduleModal.scss";
const ScheduleModal = (props) => {
	const { show, setShow } = props;
	const scheduleMessage = () => {
		setShow();
	};

	return (
		<>
			<div
				className={`${
					show === false ? "hidden" : "schedule-modal-container"
				}`}
			>
				<div className="schedule-modal-box">
					<Exit
						className="exit-icon"
						onClick={() => {
							setShow();
						}}
					/>
					<h1> Your message has been Scheduled. </h1>
					<div className="schedule-button-container">
						<button
							className="sch-btn"
							onClick={() => {
								scheduleMessage();
							}}
						>
							Continue
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ScheduleModal;
