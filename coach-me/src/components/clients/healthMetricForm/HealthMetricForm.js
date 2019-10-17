import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { updateMetric } from '../../../actions/clientActions';

function HealthMetricForm(props) {
// Implements Redux
const state = useSelector(state => state);
const dispatch = useDispatch();
// {
//   "records": [
//     {
//              "id": "reck71PQQtBHkbNIF",
//       "fields": {
//         "Client_Name": [
//           "rec43ppgrbQld6xPJ"
//         ],
//         "Date_time": null,
//                 "Blood_sugar":123435643561234,
//                 "Blood_pressure_over":1421341223,
//                     "Blood_pressure_under":12321342134555,
//                 "Weight":1234
//       }
//     }
//   ]
//     }
const [metrics, setMetrics] = useState({records: [
  {
    id: "reck71PQQtBHkbNIF",
    fields: { 
      Client_Name: [
        "rec43ppgrbQld6xPJ"
      ],
      Date_time: null,
      Blood_pressure_over: null,
      Blood_pressure_under: null,
      Blood_sugar: null,
      Weight: null
    }
  },]
})   

const handleInputChange = e => {
  e.preventDefault()
        setMetrics({...metrics, [e.target.name]: e.target.value});
};

  const submitNewMetric = e => {
        e.preventDefault();
        console.log('whats being submitted', metrics)
        dispatch(updateMetric(metrics));
        // setMetrics({records: [
        //   {
        //     id: "reck71PQQtBHkbNIF",
        //     fields: {
        //       "Client_Name": [
        //         "rec43ppgrbQld6xPJ"
        //       ]
              
        //     }
        //   },]
        // });
    };
        return (
            <div className='metric-form-wrapper'>
              <h1>Today's Numbers</h1>
                <form onSubmit={submitNewMetric}>
                 <div classname = "input-label">
                 <img></img>
                  <h3>Fasting Blood Glucose</h3>
                 </div>
                 
                  
                  <input
                      className='metric-input'
                      onChange={handleInputChange}
                      type='integer'
                      value={metrics.records[0].fields.Blood_sugar}
                      name='Blood_sugar'
                  />
                  <p>mg/dL</p>
                   <div classname = "input-label">
                 <img></img>
                  <h3>Weight</h3>
                 </div>
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        type='integer'
                        value={metrics.records[0].fields.Weight}
                        name='Weight'
                    />
                    <p>lbs</p>
                     <div classname = "input-label">
                 <img></img>
                  <h3>Blood Pressure</h3>
                 </div>
                 <div className = "blood-pressure-container">
                 <input
                        className='metric-input'
                        onChange={handleInputChange}
                        type='integer'
                        value={metrics.records[0].fields.Blood_pressure_over}
                        name='Blood_pressure_over'
                    />
                    <p>/</p>
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        type='integer'
                        value={metrics.records[0].fields.Blood_pressure_under}
                        name='Blood_pressure_under'
                    />
                    <p>mmHg</p>

                 </div>
                 

                    <button>Submit</button>
                </form>
            </div>
        );
    }



export default HealthMetricForm;

