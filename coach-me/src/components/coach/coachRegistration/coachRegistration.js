import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {registerUser} from '../../../actions/authActions';


function coachRegistration (props)  {
    // const state = useSelector(state => state);
    // const dispatch = useDispatch();
    // // const [fullName, setFullName] = useState();
    // // const [email, setemail] = useState();
    // // const [password, setpassword] = useState();
    // // const [confirmPassword, setconfirmPassword] = useState();
    // // const [register, setregister] = useState();

    // const handleChange = e => {
    //     e.preventDefault();
    //     setFullName(e.target.value);
    // };
    // const handleChange2 = e => {
    //     e.preventDefault();
    //     setemail(e.target.value);
    // };
    // const handleChange3 = e => {
    //     e.preventDefault();
    //     setpassword(e.target.value);
    // };
    // const handleChange4 = e => {
    //     e.preventDefault();
    //     setconfirmPassword(e.target.value);
    // };
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     dispatch(registerUser(register));
    //     setshow(!show);
    // };
    // // useEffect(() => {
    //     setregister({
    //         records: [
    //             {
    //                 fields: {
    //                     FullName: fullName,
    //                     Email: email,
    //                     Password: password,
    //                     ConfirmPassword: confirmPassword,
                        
    //                 }
    //             }
    //         ]
    //     });
    // }, [fullname, email, password, confirmPassword]);
    return (
        <div className='Register-Wrapper'>
				
                <form  className="Register-Form-Wrapper" action="" 
                >
				<h1 className='Register-Title'>Register</h1>
					<input
						type="text"
						placeholder="Full Name"
						name="full_name"
						// onChange={handleChange}
						// value={state.registerCred.full_name}
					/>
				
					<input
						type="text"
						placeholder="E-mail"
						name="E-Mail"
						// onChange={handleChange2}
						// value={state.registerCred.email}
					/>
					<input
						type="password"
						placeholder="password"
						name="password"
						// onChange={handleChange3}
						// value={state.registerCred.password}
					/>
                    <input
						type="password"
						placeholder="Confirm password"
						name="password"
						// onChange={handleChange4}
						// value={state.registerCred.password}
					/>
					<button>Register</button>
				</form>
			</div>
    )
}

export default coachRegistration
