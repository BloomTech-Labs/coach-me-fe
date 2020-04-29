import React, { useState } from "react";
import "./createProfile.scss";

const CreateProfile = () => {
    const [config, setConfig] = useState({
        weight: "",
        height: "",
        gender: false,
    });
    const handleChange = (e) => {
        setConfig({ ...config, [e.target.name]: e.target.value });
    };
    return (
        <div className="create-profile">
            <h1 className="profile-header">Let's create your profile</h1>
            <input
                handleChange={handleChange}
                placeholder="Weight"
                className="create-input"
            />
            <input
                handleChange={handleChange}
                placeholder="Height"
                className="create-input"
            />
            <div className="gender-profile">
                <div></div>
            </div>
        </div>
    );
};

export default CreateProfile;
