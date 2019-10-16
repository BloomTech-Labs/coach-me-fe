import React from 'react';

function HealthMetricCards(props) {
    // console.log(props.record);
    const recordInfo = props.record;

    console.log('from recordInfo', recordInfo);
    return (
        <div className='health-card'>
            <h4>Checkin Date: {recordInfo.fields['Date of Check-in']}</h4>
            <h4>
                Blood Pressure:{' '}
                {recordInfo.fields['Most recent blood pressure?']
                    ? recordInfo.fields['Most recent blood pressure?']
                    : 'None'}
            </h4>
            <h4>
                Weight:{' '}
                {recordInfo.fields['Most recent weight? (pounds)']
                    ? recordInfo.fields['Most recent weight? (pounds)']
                    : 'None'}
            </h4>
            <h4>
                Blood Glucose Level:{' '}
                {recordInfo.fields['Most recent blood glucose level?']
                    ? recordInfo.fields['Most recent blood glucose level?']
                    : 'None'}
            </h4>
        </div>
    );
}

export default HealthMetricCards;
