import React from 'react';

function MiniMessageCard(props) {
    const { item } = props;
    console.log('miniMessage', item);
    return <div>IHII</div>;
}

export default MiniMessageCard;

// <div className='mini-card-container'>
//   <div className='mini-card'>
//     MINIMESSAARDGECARD       <p>{item.month}</p>
//       <p>{item.dom}</p>
//hello
//       <p>{item.year}</p>
//       <p>{item.msg}</p>
//   </div>
// </div>
