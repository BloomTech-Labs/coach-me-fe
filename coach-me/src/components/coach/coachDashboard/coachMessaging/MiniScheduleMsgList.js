import React from 'react';
import MiniMessageCard from './MiniMessageCard';

function MiniScheduleMsgList(props) {
    const { messages } = props;
    console.log('MiniScheduleMsgList', message);

    return (
        <div>
            <div className='mini-card-list'>
                <MiniMessageCard />
            </div>
        </div>
    );
}

export default MiniScheduleMsgList;
