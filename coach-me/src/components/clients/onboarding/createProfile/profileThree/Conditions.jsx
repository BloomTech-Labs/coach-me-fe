import React, { useState } from 'react';

const Conditions = (props) => {

    const [conditions, setConditions] = useState([
        {
            id: 0,
            text: 'Anxiety',
            selected: false,
        },
        {
            id: 1,
            text: 'Diabetes',
            selected: false,
        },
        {
            id: 2,
            text: 'High Blood Pressure',
            selected: false,
        },
        {
            id: 3,
            text: 'High Cholesterol',
            selected: false,
        }
    ])

   

      const selectCondition = id => {
        setConditions(conditions.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        })) 
      }
    return (
        <div className="conditions-query">
        <h4>Do you have any of the following conditions?</h4>
        <div className="conditions">
            {conditions.map(condition => {
                return (
                    <button 
                    className={condition.selected ? 'option-selected' : 'option'}
                    id={condition.id}
                    onClick={()=>selectCondition(condition.id)}
                    >{condition.text}</button>
                )
            })}

        </div>
    </div>
    );
}

export default Conditions;
