import React,{ useState } from 'react';

const JoiningOptions = (props) => {

    const [joiningOptions,setJoiningOptions] = useState([
        {
            id:0,
            text: 'On My Own.',
            selected: false,
        },
        {
            id:1,
            text: 'Through my employer.',
            selected: false,
        },
        {
            id:2,
            text: 'Through health insurance.',
            selected: false,
        },
    ])

    const selectOption = id => {
    
        setJoiningOptions(joiningOptions.map(item => {
          if(item.id === id) {
           return {...item,selected : !item.selected}
          }else {
            return item;
          } 
        }))
      }
    return (
        <div data-testid='joining-options' className="joining-options">
            <h4 data-testid='joining-header-text'>Are you joining Coach Me on your own or an organization, such as your employer or health insurance?</h4>
                {joiningOptions.map((option, i) => {
                    return(
                        <div key={i}>
                            <button 
                            className={option.selected ? 'option-selected' : 'option'}
                            id={option.id}
                            
                            onClick={()=>selectOption(option.id)}
                            >{option.text}</button>
                        </div>
                    )
                })}
            </div>
    );
}

export default JoiningOptions;
