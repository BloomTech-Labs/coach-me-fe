import React from 'react';
import './completeModal.scss';

const CompleteModal = (props) => {
    return (
        <div className={props.showModal ? 'completion' : 'closed'}>
            <div className="modal-content">
                <h4>Congratulations! You are in a Coach Me Health Program!</h4>

                <h4>Get ready to make some changes towards a healthier life!</h4>

                <a href='/dashboard-client'>Go to Dashboard</a >
            </div>
        </div>
    );
}

export default CompleteModal;
