import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { updateMetric } from '../../../actions/clientActions';

function HealthMetricForm(props) {
// Implements Redux
const state = useSelector(state => state);
const dispatch = useDispatch();
const [metrics, setMetrics] = useState({records: 
  {
    id: "reck71PQQtBHkbNIF",
    fields: {
      "Client_Name": [
        "rec43ppgrbQld6xPJ"
      ]
      
    }
  },
})   

const handleInputChange = e => {
  e.preventDefault()
        setMetrics({...metrics, [e.target.name]: e.target.value});
};

  const submitNewMetric = e => {
        e.preventDefault();
        console.log('whats being submitted', metrics)
        dispatch(updateMetric(metrics));
        setMetrics({records: 
          {
            id: "reck71PQQtBHkbNIF",
            fields: {"Client_Name": [
              "rec43ppgrbQld6xPJ"
            ],
            "Date_time": null,
            
            
            }
          },
        });
    };
        return (
            <div className='metric-form-wrapper'>
                <form onSubmit={submitNewMetric}>
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        placeholder='weight/pesos'
                        type='integer'
                        value={metrics.records.fields.Weight}
                        name='Weight'
                    />
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        placeholder='Blood Glucose Level'
                        type='integer'
                        value={metrics.records.fields.Blood_sugar}
                        name='Blood_sugar'
                    />
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        placeholder='Blood Pressure Over'
                        type='integer'
                        value={metrics.records.fields.Blood_pressure_over}
                        name='Blood_pressure_over'
                    />
                    <input
                        className='metric-input'
                        onChange={handleInputChange}
                        placeholder='Blood Pressure under'
                        type='integer'
                        value={metrics.records.fields.Blood_pressure_under}
                        name='Blood_pressure_under'
                    />

                    <button>Submit</button>
                </form>
            </div>
        );
    }



export default HealthMetricForm;

