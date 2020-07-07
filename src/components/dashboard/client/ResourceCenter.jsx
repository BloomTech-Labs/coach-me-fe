import React, { useState } from "react";
import "../../../sass/dashboard/client/resourceCenter.scss";

const ResourceCenter = () => {
	const [resources] = useState([
		{"title": "Overview of Diabetes and Treatments", "url": "https://www.medicalnewstoday.com/articles/323627"},
		{"title": "Managing High Blood Pressure", "url": "https://www.gethealthystayhealthy.com/articles/managing-high-blood-pressure"}
	])
	return (
		<div className="resources-container">
			<div className="top-section">
				<h1>Resource Center</h1>
			</div>
			<div className="cards-container">
				{resources.map((r, index) => { return (
					<div className="resource-card" key={index}>
							<h2>{r.title}</h2>
							<a className="url-link" href={r.url}>{r.url}</a>
					</div>
				)})}
			</div>
		</div>
	);
};

export default ResourceCenter;
