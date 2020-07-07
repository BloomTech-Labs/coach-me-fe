import React, { useState } from "react";
import "../../../sass/dashboard/client/sessionNotes.scss";

const SessionNotes = () => {
	const [notes] = useState([{
		"note":"Today was out first meeting together, I feel like I got to know you very well, and I have a good idea of your goals and the time frame you wish to complete it and developed an understanding of your current health conditions.", "date":"6/8/20"
	}])
	return (
		<div className="notes-container">
			<h1>Coach Messages</h1>
			<div className="cards-container">
				{notes.map((n, index) => { return (
					<div className="note-card" key={index}>
						<p className="date">Session Date:{n.date}</p>
						<p>{n.note}</p>
					</div>
				)})}
			</div>
		</div>
	);
};

export default SessionNotes;
