import React from 'react';

function HealthMetricCards(props) {
    // console.log('from healthmetriccards', props);
    // console.log('type of filter', typeof props.historyFilter);

    const handleClick = () => {
        props.setToggleHistory(false);
    };

    if (typeof props.historyFilter === 'object') {
        return (
            <div className='metric-container'>
                <div className='back-btn-container'>
                    <div className='back-button' onClick={() => handleClick()}>
                        <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M8.62236 13.6408L7.87914 14.384C7.56445 14.6987 7.05557 14.6987 6.74423 14.384L0.236023 7.87914C-0.0786742 7.56445 -0.0786742 7.05558 0.236023 6.74423L6.74423 0.236023C7.05892 -0.0786742 7.56779 -0.0786742 7.87914 0.236023L8.62236 0.979244C8.94041 1.29729 8.93371 1.8162 8.60897 2.12755L4.57482 5.97088H14.1965C14.6418 5.97088 15 6.32909 15 6.77436V7.84567C15 8.29093 14.6418 8.64915 14.1965 8.64915H4.57482L8.60897 12.4925C8.93706 12.8038 8.94376 13.3227 8.62236 13.6408Z'
                                fill='black'
                            />
                        </svg>
                        <p>Back</p>
                    </div>
                </div>
                <div className='history-header'>
                    <h2>{props.historyLabel}</h2>
                    <h4>All previous fasting {props.historyLabel} metrics.</h4>
                </div>
                <div className='health-cards-container'>
                    {props.clientData.map((record, index) => (
                        <div className='health-card'>
                            <div className='health-label'>
                                <h3>{props.historyLabel}</h3>
                                <h4>{record.fields['Date_time']}</h4>
                            </div>
                            <div className='health-metric-value'>
                                <h4 className='health-value'>
                                    {record.fields[props.historyFilter[0]]
                                        ? record.fields[
                                              props.historyFilter[0]
                                          ] +
                                          '/' +
                                          record.fields[props.historyFilter[1]]
                                        : 'N/A'}
                                </h4>
                                <h4 className='health-scale'>
                                    {props.historyScale}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className='metric-container'>
                <div className='back-btn-container'>
                    <div className='back-button' onClick={() => handleClick()}>
                        <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M8.62236 13.6408L7.87914 14.384C7.56445 14.6987 7.05557 14.6987 6.74423 14.384L0.236023 7.87914C-0.0786742 7.56445 -0.0786742 7.05558 0.236023 6.74423L6.74423 0.236023C7.05892 -0.0786742 7.56779 -0.0786742 7.87914 0.236023L8.62236 0.979244C8.94041 1.29729 8.93371 1.8162 8.60897 2.12755L4.57482 5.97088H14.1965C14.6418 5.97088 15 6.32909 15 6.77436V7.84567C15 8.29093 14.6418 8.64915 14.1965 8.64915H4.57482L8.60897 12.4925C8.93706 12.8038 8.94376 13.3227 8.62236 13.6408Z'
                                fill='black'
                            />
                        </svg>
                        <p>Back</p>
                    </div>
                </div>
                <div className='history-header'>
                    <h2>{props.historyLabel}</h2>
                    <h4>All previous fasting {props.historyLabel} metrics.</h4>
                </div>
                <div className='health-cards-container'>
                    {props.clientData.map((record, index) => (
                        <div className='health-card'>
                            <div className='health-label'>
                                <h3>{props.historyLabel}</h3>
                                <h4>{record.fields['Date_time']}</h4>
                            </div>
                            <div className='health-metric-value'>
                                <h4 className='health-value'>
                                    {record.fields[props.historyFilter]
                                        ? record.fields[props.historyFilter]
                                        : 'N/A'}
                                </h4>
                                <h4>{props.historyScale}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default HealthMetricCards;
