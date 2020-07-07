import React, { useState } from "react";
import X from "../../../utils/assets/icons/red-x.png";
import "../../../sass/dashboard/client/notifications.scss";

const Notifications = (props) => {
	const [notifications] = useState([
		{"title": "Welcome to CoachMe!!", "notification": "Client Name, to get you started fill out a health status form! You can view your health graphs by cliking on Track Progress in your dashboard."},
		{"title": "Next Steps", "notification": "Your coach will message you shortly if not already! Go to Coach Messages and start a conversation with your coach."},
		{"title": "Other Notifications", "notification": "other notification's text would go here as well."},
		{"title": "Other Notifications", "notification": "other notification's text would go here as well."},
		{"title": "Other Notifications", "notification": "other notification's text would go here as well."}
	])
	const removeNotification = () => {
								
	}
	
	return (
		<div className="notification-container">
			<div className="top-section">
				<h1>Notifications</h1>
			</div>
			<div className="cards-container">
				{notifications.map((n, index) => { return (
					<div className="notification-card" key={index}>
						<div className="top-card">
							<h2>{n.title}</h2>
							<img className="close-btn" onClick={removeNotification} src={X} alt="x"/>					
						</div>
							<p>{n.notification}</p>
					</div>
				)})}
			</div>
		</div>
	);
};

export default Notifications;
