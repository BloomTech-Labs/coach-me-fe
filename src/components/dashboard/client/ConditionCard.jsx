import React from "react";
import classNames from "classnames";
import "../../../sass/dashboard/client/conditionCard.scss";

const ConditionCard = (props) => {
    if(props.condition === "Diabetes") {
    }
    return (
        <div className={
            props.condition === "Anxiety" ? classNames("condition-container anxiety") :
            props.condition === "Diabetes"? classNames("condition-container diabetes") :
            props.condition === "HBP" ? classNames("condition-container hbp") :
            props.condition === "High Cholesterol" ? classNames("condition-container hc") :
            classNames("condition-container")
        }>
            <h3>{props.condition}</h3>
        </div>
    )   
}

export default ConditionCard;