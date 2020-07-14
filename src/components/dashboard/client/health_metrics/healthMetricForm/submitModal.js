import React from "react";

import { ReactComponent as Warning } from "../../../../../utils/assets/icons/login/warning.svg";
import { ReactComponent as Success } from "../../../../../utils/assets/icons/login/success.svg";
import "../../../../../sass/dashboard/client/health_metrics/FailureModal.scss";

const SubmitModal = (props) => {
	const { show, onSubmit, bpOver, bpUnder, bS, weight, failMetric } = props;
	if (show) {
		if ((bpOver || bpUnder || bS || weight) !== undefined) {
			return (
				<div className="modal-container">
					<div className="modal-box">
						<Success />
						<p>Form-Success!</p>

						<button onClick={() => onSubmit()}>
							continueBtn
						</button>
					</div>
				</div>
			);
		}

		if ((bpOver || bpUnder || bS || weight) === undefined) {
			return (
				<div className="modal-container">
					<div className="modal-box">
						<Warning />
						<p>Form-Failure</p>

						<button onClick={() => failMetric()}>OK</button>
					</div>
				</div>
			);
		}
	}

	return null;
};

export default SubmitModal;
