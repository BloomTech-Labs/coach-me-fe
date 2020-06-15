import React from "react";
import "../../../sass/dashboard/client/conditionCard.scss";

const ConditionCard = (props) => {
    if(props.condition === "Diabetes") {
        console.log("has diabetes")   
    }
    return (
        <div className="condition-container">
            <h3>{props.condition}</h3>
        </div>
    )   
}

export default ConditionCard;