import React, { useState } from "react";
import X from "../../../utils/assets/icons/red-x.png";
import "../../../sass/dashboard/client/notifications.scss";

const Notifications = (props) => {
	const [notifications] = useState([
		{"title": "Welcome to CoachMe!!", "notification": "To get you started fill out a health status form! You can view your health graphs by cliking on Track Progress in your dashboard."},
		{"title": "Next Steps", "notification": "Your coach will message you shortly if not already! Go to Coach Messages and start a conversation with your coach."}
	])
	const removeNotification = () => {
								
	}
	
	return (
		<div data-testid="notification-page" className="notification-container">
			<div data-testid="notification-top" className="top-section">
				<h1  data-testid="notification-header">Notifications</h1>
			</div>
			<div className="cards-container">
				{notifications.map((n, index) => { return (
					<div className="notification-card" key={index}>
							<div data-testid="card" className="top-card">
								<h2  data-testid="notification-title">{n.title}</h2>
								<img data-testid="notification-close"className="close-btn" onClick={removeNotification} src={X} alt="x"/>					
							</div>
								<p  data-testid="notification-text">{n.notification}</p>
						</div>
				)})}
			</div>
		</div>
	);
};

export default Notifications;
