import React from 'react';

function HealthMetricCards(props) {
    console.log('from healthmetriccards', props);

    const handleClick = () => {
        props.setToggleHistory(false);
    };

    return (
        <div className='metric-container'>
            <button className='back-button' onClick={() => handleClick()}>
                Back
            </button>
            <div>
                <h3>{props.historyLabel}</h3>
                <h4>All previous fasting {props.historyLabel} metrics.</h4>
            </div>
            <div>
                {props.clientData.map((record, index) => (
                    <div>
                        <h4>{props.historyLabel}</h4>
                        <h4>{record.fields['Date of Check-in']}</h4>
                        <h4>
                            {record.fields[props.historyFilter]
                                ? record.fields[props.historyFilter]
                                : 'N/A'}
                        </h4>
                        <h4>{props.historyScale}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HealthMetricCards;
