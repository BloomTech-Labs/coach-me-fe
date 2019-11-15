import React from 'react';
import './coachMessaging.scss';

function MiniMessageCard(props) {
    const { item } = props;
    // console.log('miniMessage', item);
    return (
        <div className='mini-card-container'>
            <div className='mini-card'>
                <div>
                    <p>{item.month}</p>
                    <p>{item.dom}</p>
                    <p>{item.year}</p>
                </div>
                <div>
                    <p>{item.hour}</p>
                    <p>{item.min}</p>
                </div>
                <p>{item.msg}</p>
            </div>
        </div>
    );
}

export default MiniMessageCard;
