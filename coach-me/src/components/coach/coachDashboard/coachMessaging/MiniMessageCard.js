import React from 'react';
import './messageCard.scss';

function MiniMessageCard(props) {
    const { item } = props;
    console.log('miniMessage', item);
    return (
        <div className='mini-card-container'>
            <div className='date-container'>
                <p>{item.month}</p>
                <p>{item.dom}</p>
                <p>{item.year}</p>
            </div>
            <div className='time-container'>
                <p>{item.hour}</p>
                <p>{item.min}</p>
            </div>
            <div className='message-container'>
                <p>{item.msg}</p>
            </div>
        </div>
    );
}

export default MiniMessageCard;
