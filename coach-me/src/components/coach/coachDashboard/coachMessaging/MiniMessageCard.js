import React from 'react';

function MiniMessageCard(props) {
    const { item } = props;
    console.log('miniMessage', item);
    return (
        <div className='mini-card-container'>
            <div className='mini-card'>
                <p>{item.month}</p>
                <p>{item.dom}</p>
                <p>{item.year}</p>
                <p>{item.msg}</p>
            </div>
        </div>
    );
}

export default MiniMessageCard;
