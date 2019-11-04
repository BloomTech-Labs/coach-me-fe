import React, {useEffect,useState} from 'react'
import { Route, Redirect } from 'react-router-dom';

export default function Loading() {
    const [check, setCheck] = useState(false)
    const token = localStorage.getItem('token')
    console.log(token)
    useEffect( () =>{
        if( token){
            setCheck(true)
        }
    },[token])

    if (check === false && ! token){
       
        return(
            <div>
            loading
        </div>
        )

    }

    if (check=== true && token){
        
        return <Redirect to='/dashboard' />

    }
       
    
}
