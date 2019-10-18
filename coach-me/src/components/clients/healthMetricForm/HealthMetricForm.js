import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMetric } from '../../../actions/clientActions';
import { connect } from 'react-redux';
import {translate} from '../../utils/language/translate'

function HealthMetricForm(props) {
  console.log(props)
  // Implements Redux
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [bpOver, setBpOver] = useState();
  const [bpUnder, setBpUnder] = useState();
  const [bS, setBS] = useState();
  const [weight, setWeight] = useState();
  const [metrics, setMetrics] = useState();

  const handleInputChange = e => {
    e.preventDefault();
    setBS(e.target.value);
  };
  const handleInputChange2 = e => {
    e.preventDefault();
    setBpOver(e.target.value);
  };
  const handleInputChange3 = e => {
    e.preventDefault();
    setBpUnder(e.target.value);
  };
  const handleInputChange4 = e => {
    e.preventDefault();
    setWeight(e.target.value);
  };

  useEffect(() => {
    setMetrics({
      records: [
        {
          id: 'reck71PQQtBHkbNIF',
          fields: {
            Client_Name: ['rec43ppgrbQld6xPJ'],
            Date_time: null,
            Blood_pressure_over: parseInt(bpOver),
            Blood_pressure_under: parseInt(bpUnder),
            Blood_sugar: parseInt(bS),
            Weight: parseInt(weight)
          }
        }
      ]
    });
    console.log('whats being submitted', metrics);
  }, [bpOver, bpUnder, bS, weight]);

  const submitNewMetric = e => {
    e.preventDefault();
    dispatch(updateMetric(metrics));
  };
  return (
    <div className='metric-form-wrapper'>
      <h1>Today's Numbers</h1>
      <form onSubmit={submitNewMetric}>
        <div classname='input-label'>
          <img></img>
          <h3> {translate("fastingGlucose")}</h3>
        </div>

        <input
          className='metric-input'
          onChange={handleInputChange}
          type='integer'
          value={bS}
          name='Blood_sugar'
        />
        <p>mg/dL</p>
        <div classname='input-label'>
          <img></img>
          <h3>Weight</h3>
        </div>
        <input
          className='metric-input'
          onChange={handleInputChange4}
          type='integer'
          value={weight}
          name='Weight'
        />
        <p>lbs</p>
        <div classname='input-label'>
          <img></img>
          <h3>Blood Pressure</h3>
        </div>
        <div className='blood-pressure-container'>
          <input
            className='metric-input'
            onChange={handleInputChange2}
            type='integer'
            value={bpOver}
            name='Blood_pressure_over'
          />
          <p>/</p>
          <input
            className='metric-input'
            onChange={handleInputChange3}
            type='integer'
            value={bpUnder}
            name='Blood_pressure_under'
          />
          <p>mmHg</p>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
const mapStatetoProps = state => {
    console.log('metric', state)
    return {
        language: state.clientinfo.language
    }
}

export default connect(
  mapStatetoProps,
  { updateMetric }
)(HealthMetricForm);
