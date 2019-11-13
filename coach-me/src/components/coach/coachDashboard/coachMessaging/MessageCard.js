import React from 'react';

const MessageCard = props => {
    const { item } = props;
    return (
        <>
            <div style={{ border: '1px solid red' }}>
                <h1>{item.mon}</h1>
                <h1>{item.dom}</h1>
                <h1>{item.year}</h1>
                <h1>{item.msg}</h1>
            </div>
        </>
    );
};
export default MessageCard;
