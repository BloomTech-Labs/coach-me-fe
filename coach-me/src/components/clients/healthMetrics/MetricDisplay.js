import React from 'react';

function MetricDisplay(props) {
    if (props.filter2) {
        return (
            <>
                {props.metricData.fields[props.filter] ? (
                    <div className='current-metric'>
                        <h2>
                            {props.metricData.fields[props.filter]}/
                            {props.metricData.fields[props.filter2]}
                        </h2>
                        <p>{props.metricScale}</p>
                    </div>
                ) : (
                    <div className='current-metric'>
                        <h2>N/A</h2>
                        <p>N/A</p>
                    </div>
                )}
            </>
        );
    } else {
        return (
            <>
                {props.metricData.fields[props.filter] ? (
                    <div className='current-metric'>
                        <h2>{props.metricData.fields[props.filter]}</h2>
                        <p>{props.metricScale}</p>
                    </div>
                ) : (
                    <div className='current-metric'>
                        <h2>N/A</h2>
                        <p>N/A</p>
                    </div>
                )}
            </>
        );
    }
}

export default MetricDisplay;
