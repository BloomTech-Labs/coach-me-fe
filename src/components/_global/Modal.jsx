import React from 'react';
import './modal.scss';

function Modal({ content, title, footer, visible }) {
    return (
        <div className={`custom-modal-container ${visible ? 'custom-modal-container-active' : ''}`}>
            <div className="custom-modal-card">
                <div className="custom-modal-title">{title}</div>
                <div className="custom-modal-content">{content}</div>
                <div className="custom-modal-footer">{footer}</div>
            </div>
        </div>
    );
}

export default Modal;
