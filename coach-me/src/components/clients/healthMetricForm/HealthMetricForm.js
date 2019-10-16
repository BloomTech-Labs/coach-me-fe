import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMetric } from '../../../actions/clientActions';

class HealthMetricForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Metrics: {
                'fields': {
                    'Client Name': ['recbU0FKszWVvuo1S'],
                    'Most recent weight?': 0,
                    'Most recent blood glucose level? ': 0,
                    'Most recent blood pressure?': ''
                }
            }
        };
        console.log(props);
    }
    handleInputChange = e => {
        this.setState({
            updatedMetric: {
                ...this.state.Metrics.fields,
                [e.target.name]: e.target.value
            }
        });
    };

    submitNewMetric = e => {
        e.preventDefault();
        console.log('HEY LOOK AT ME!', this.state);
        this.props.updateMetric(this.state.Metrics);
        this.setState({
            'Most recent weight?': 0,
            'Most recent blood glucose level? ': 0,
            'Most recent blood pressure?': ''
        });
    };

    render() {
        console.log('lookit here', this.state);
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
                        type='text'
                        value={this.state.blood_pressure}
                        name='Blood Pressure'
                    />

                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { updateMetric }
)(HealthMetricForm);
