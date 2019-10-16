import React from 'react';

function MetricDisplay(props) {
    console.log(props);

    return (
        <>
            {props.metricData.fields[props.filter] ? (
                <div>
                    <h2>{props.metricData.fields[props.filter]}</h2>
                    <p>{props.metricScale}</p>
                </div>
            ) : (
                <div>
                    <h2>N/A</h2>
                </div>
            )}
        </>
    );
}

export default MetricDisplay;
