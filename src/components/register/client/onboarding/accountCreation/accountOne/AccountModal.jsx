import React from "react";
import { Link } from "react-router-dom";
import "../../../../../../sass/register/client/create_profile/accountModal.scss";

const AccountModal = (props) => {
	return (
		<div className={props.showModal ? "completion" : "closed"}>
			<div className="modal-content">
				<h4>
					Alright! Your account has been created. We'll need some more
					information before we can match you with a coach.
				</h4>

				<Link to="/createProfile1">
					<button>Let's Go!</button>
				</Link>
			</div>
		</div>
	);
};

export default AccountModal;
