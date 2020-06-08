import React from "react"
import { Link } from "react-router-dom";

const PasswordForm = (props) => {
    return (
        <div className="creds-container">
            <div className="welcome-message">
                <h1>Forgot Password</h1>
                <p>Type in your new password and confirm it.</p>
            </div>
            <div className="form-container">
                <form onSubmit={props.handleSubmit}>
                    <label>New Password</label>
                    <div className="password-container">
                        <input 
                            type={props.hidden?"password":"text"}
                            name="newPassword"
                            value={props.input.newPassword}
                            onChange={props.handleChange}
                        />
                        <img className="eye" onClick={props.handleClick} src={props.source} alt="eye"/>
                    </div>
                    <label>Repeat Password</label>
                    <div className="password-container">
                        <input 
                            type={props.hidden?"password":"text"}
                            name="repPassword"
                            value={props.input.repPassword}
                            onChange={props.handleChange}
                        />
                        <img className="eye" onClick={props.handleClick} src={props.source} alt="eye"/>
                    </div>
                    <button type="submit">Reset Password</button>
                </form>
                <p>Don't have an account?<Link to="/createAccount">Signup</Link></p>
            </div>
        </div>
    )
};

export default PasswordForm;