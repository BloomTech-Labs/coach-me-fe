import React from "react";
import { ReactComponent as Logo } from "../../../utils/assets/logo/coachmelogo-white.svg";

const SideOne = () => {
	return (
		<div className="side-one">
			<div className="logo-wrapper">
				<a href="https://www.coachmehealth.org">
					<Logo className="logo" />
				</a>
			</div>

			<div className="objective">
				<p>
					We're patient-first, a non-profit, and in the fight against
					chronic disease.
				</p>
			</div>
		</div>
	);
};

export default SideOne;
