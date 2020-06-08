import React from "react";
import "../../../../../../sass/register/client/create_profile/profile_five/timeSlot.scss";

const TimeslotWeekend = (props) => {
	return (
		<div
			className={props.selected ? "time-slot-selected" : "time-slot"}
			onClick={() => props.selectTimeWeekend(props.id)}
		>
			<p className="text">{props.text}</p>
		</div>
	);
};

export default TimeslotWeekend;
