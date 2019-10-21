import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
// import {axiosWithAirTableAuth} from '../../utils/axiosWithAirTableAuth'
import * as Yup from 'yup';
import './registerClient.scss';

const RegisterClient = ({ values, errors, touched, status }) => {
    const [creds, setCreds] = useState({ name: '', phonenumber: '' });

    useEffect(() => {
        if (status) {
            setCreds([...creds, status]);
            // console.log(user);
        }
    }, [status]);
    return (
        <div>
            <h1>Register</h1>
            <Form>
                <div>
                    <label>Name:</label>
                    {touched.name && errors.name && <p>{errors.name}</p>}
                    <Field
                        className='input'
                        type='text'
                        name='name'
                        placeholder='name'
                    />
                </div>

                <div>
                    <label>Phone#:</label>
                    {touched.phonenumber && errors.segment && (
                        <p>{errors.segment}</p>
                    )}
                    <Field
                        className='input'
                        type='text'
                        name='phonenumber'
                        placeholder='phonenumber'
                    />
                </div>

                <div>
                    <div>
                        Language?
                        <Field component='select' name='language'>
                            <option value='Select'>Select</option>
                            <option value='English'>English</option>
                            <option value='Español'>Español</option>
                            <option value='Both'>Both</option>
                        </Field>
                    </div>
                </div>
                <button type='submit'>Submit</button>
                {/* <div>
        {touched.due_by && errors.due_by && <p>{errors.due_by}</p>}
        <Field className="username" type="text" name="due_by" placeholder="add date" />
      </div> */}
            </Form>
        </div>
    );
};

const RegisterFormik = withFormik({
    mapPropsToValues({ name, phonenumber, language }) {
        return {
            name: name || '',
            phonenumber: phonenumber || '',
            language: language || ''
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('name is required'),
        phonenumber: Yup.string().required('phonenumber is required'),
        language: Yup.string().required('please choose a language')
    }),
    handleSubmit(values, { setStatus, resetForm, props }) {
        // console.log(values);

        const data = {
            fields: {
                Name: `${values.name}`,
                'Face sheet': [],
                'Weekly check-ins': '0',
                'weekly check-ins 2': [],
                'Weigh In Test': 'Sent text',
                Result: 'No response',
                Details: ''
            }
        };

        const headers = { 'Content-Type': 'application/json' };
        axios
            .post(
                'https://api.airtable.com/v0/appcGDj4SuiTu3Nte/Master ?api_key=keytu1to8j0ODW8sD',
                data,
                { headers: headers }
            )
            .then(res => {
                // console.log(res);
            })
            .catch(err => {
                // console.log(err);
            });
    }

    // const info = JSON.stringify(data)

    // const heading = { headers: { 'Content-Type': 'application/json' }}
})(RegisterClient);

export default RegisterFormik;
