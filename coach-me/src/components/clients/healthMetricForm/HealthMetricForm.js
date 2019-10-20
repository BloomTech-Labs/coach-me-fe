<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMetric } from '../../../actions/clientActions';
import { connect } from 'react-redux';
import { translate } from '../../utils/language/translate';

function HealthMetricForm(props) {
  console.log(props);
=======
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMetric } from "../../../actions/clientActions";
import "./healthMetricForm.scss";
import iconfastingBloodGlucose from "../../utils/assets/Blood.svg";
import iconbloodPressure from "../../utils/assets/bloodPressure.svg";
import iconweight from "../../utils/assets/weight.svg";
import { addMetric } from "../../../actions/clientActions";
import { connect } from "react-redux";
import { translate } from "../../utils/language/translate";

function HealthMetricForm(props) {
  // console.log(props);
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e
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
          fields: {
            Client_Name: props.id,
            Date_time: null,
            Blood_pressure_over: parseInt(bpOver),
            Blood_pressure_under: parseInt(bpUnder),
            Blood_sugar: parseInt(bS),
            Weight: parseInt(weight)
          }
        }
      ]
    });
    // console.log('whats being submitted', metrics);
  }, [bpOver, bpUnder, bS, weight]);

  const submitNewMetric = e => {
    e.preventDefault();
    dispatch(addMetric(metrics));
    props.history.push("/dashboard-client");
  };

  return (
<<<<<<< HEAD
    <div className='metric-form-wrapper'>
      <h1>{translate('HMFtitle')}</h1>
      <form onSubmit={submitNewMetric}>
        <div classname='input-label'>
          <img></img>
          <h3> {translate('fastingGlucose')}</h3>
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
          <h3>{translate('weight')}</h3>
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
          <h3>{translate('bp')}</h3>
=======
    <div className="metric-form-wrapper">
      <h1>{translate("HMFtitle")}</h1>
      <form onSubmit={submitNewMetric}>
        <div className="input-label">
          <div className="img-wrapper">
            <img class="icon" src={iconfastingBloodGlucose}></img>
          </div>
          <h3>{translate("fastingGlucose")}</h3>
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e
        </div>
        <div className="input-wrapper">
          <input
            className="metric-input"
            onChange={handleInputChange}
            type="integer"
            value={bS}
            name="Blood_sugar"
          />
          <p>mg/dL</p>
        </div>

        <div className="input-label">
          <div className="img-wrapper">
            <img class="icon" src={iconweight}></img>
          </div>
          <h3>{translate("weight")}</h3>
        </div>
        <div className="input-wrapper">
          <input
            className="metric-input"
            onChange={handleInputChange4}
            type="integer"
            value={weight}
            name="Weight"
          />
          <p>lbs</p>
        </div>

        <div className="input-label">
          <div className="img-wrapper">
            <img class="icon" src={iconbloodPressure}></img>
          </div>
          <h3>{translate("bp")}</h3>
        </div>
        <div className="blood-pressure-container">
          <div className="input-wrapper">
            <input
              className="metric-input-pb"
              onChange={handleInputChange2}
              type="integer"
              value={bpOver}
              name="Blood_pressure_over"
            />
            <span>/</span>
            <input
              className="metric-input-pb"
              onChange={handleInputChange3}
              type="integer"
              value={bpUnder}
              name="Blood_pressure_under"
            />
            <p>mmHg</p>
          </div>
        </div>

        <button>{translate("submitBtn")}</button>
      </form>
    </div>
  );
}
const mapStatetoProps = state => {
<<<<<<< HEAD
  console.log('metric', state);
  console.log(state.clientinfo.id);
=======
  // console.log('metric', state);
  // console.log(state.clientinfo.id);
>>>>>>> 7dbad760aed5ce2cac04cedb6d100f17d7f8797e
  return {
    language: state.clientinfo.language,
    Client_Name: state.clientinfo.id
  };
};

export default connect(
  mapStatetoProps,
  { addMetric }
)(HealthMetricForm);
