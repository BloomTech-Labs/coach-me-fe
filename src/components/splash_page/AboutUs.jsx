import React from "react";
// import Login from "./Login";

import "../../sass/splash_page/splash.scss";

const AboutUs = () => {
	return (
		<div className="about">
			<div className="how-we-do">
				<h4 className="about-header">How we do it</h4>
				<p className="about-text bold">
					We believe in the power of people to drive lifestyle changes
					and better outcomes.
				</p>
				<p className="about-text">
					Our tech-enabled platform allows health coaches to reach
					patients where they are every day - on their phones.
				</p>
			</div>
			<div className="impact">
				<h4 className="about-header">Our Impact</h4>
				<p className="about-text bold">
					Medicaid pays billions of dollars a year on treating
					downstream effects of diabetes and heart disease.
				</p>
				<p className="about-text">
					But these conditions are reversible. Health coaching has
					shown sustained improvements in health outcomes specifically
					in low-income populations
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
