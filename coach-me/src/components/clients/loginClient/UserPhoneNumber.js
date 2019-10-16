import React, {useState} from 'react'

const UserPhoneNumber = (props) => {
    const { next, config, setconfig} = props
    console.log(config)
    const [input, setinput]=useState({areacode:'', dig1:'', dig2:''})

    const handleChange = e =>{
        setinput({...input, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
         const number = input.areacode + input.dig1 + input.dig2
         
         setconfig({...config, phonenumber:number})
         
     }
     const textinput = React.createRef()
    const moveOver = (e, item1, item2) =>{
      
        const length = e.target.value.length
        const maxLength = document.getElementById(item1).getAttribute('maxLength')
         if (length == maxLength ){
            document.getElementById(item2).focus()
         } 
    }
    
   
    return (
        <div>
        <div >
           <h1>Phone Number</h1> 

           <form onSubmit={ (e) => {handleSubmit(e)}}>
           <input type="text" 
           id='txt1'
           ref={textinput}
           maxLength="3"
           name="areacode" onChange={handleChange} value={input.areacode}
           onInput={ (e)=> {moveOver(e,'txt1', 'txt2')}}
           />
            <input type="text" 
            id='txt2'
           maxLength="3"
           name="dig1" onChange={handleChange} value={input.dig1}
           onInput={ (e)=> {moveOver(e,'txt2', 'txt3')}}
           />

             <input type="text"
             id='txt3' 
           maxLength="4"
           name="dig2" onChange={handleChange} value={input.dig2}
        //    onKeyUp={ (e)=> {moveOver(e,'txt2', 'txt3')}
           />
           <button type='submit'> add </button>
           <button  type='button' onClick={next} > Next </button>
           </form>
           
        </div>
        <div>
           
        </div>
        </div>
        
    )

}

export default UserPhoneNumber