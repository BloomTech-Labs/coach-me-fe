import React from 'react';

function HealthMetricCards(props) {
    console.log(props);

    const handleClick = () => {
        props.setToggleHistory(false);
    };

    return (
        <div className='metric-container'>
            <button className='back-button' onClick={() => handleClick()}>
                Back
            </button>
        </div>
    );
}

export default HealthMetricCards;
