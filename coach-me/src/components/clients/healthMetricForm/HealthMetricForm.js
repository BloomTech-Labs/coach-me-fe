import React, { Component } from 'react';
import { connect } from 'react-redux';

class HealthMetricForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            blood_glucose: 0,
            blood_pressure: 0,
            user_id: localStorage.getItem('userID')
        };
    }

    submitNewMetric = e => {
        e.preventDefault();
        this.props.addMetric(this.state);
        this.setState({
            weight: '',
            blood_glucose: '',
            blood_pressure: ''
        });
    };

    render() {
        return (
            <div className='metric-form-wrapper'>
                <form onSubmit={this.submitNewMetric}>
                    <input
                        className='metric-input'
                        onChange={this.handleInputChange}
                        placeholder='weight/pesos'
                        type='integer'
                        value={this.state.weight}
                        name='weight/pesos'
                    />
                    <input
                        className='metric-input'
                        onChange={this.handleInputChange}
                        placeholder='Blood Glucose Level'
                        type='integer'
                        value={this.state.blood_glucose}
                        name='Blood Glucose level'
                    />
                    <input
                        className='metric-input'
                        onChange={this.handleInputChange}
                        placeholder='Blood Pressure'
                        type='integer'
                        value={this.state.blood_pressure}
                        name='Blood Pressure'
                    />

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default HealthMetricForm;
