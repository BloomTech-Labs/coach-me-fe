//clientActions

import {
    GET_CLIENTS,
    ADD_CLIENT,
    DELETE_CLIENT,
    CLIENTS_ERROR,
    UPDATE_METRIC_START,
    UPDATE_METRIC_SUCCESS,
    UPDATE_METRIC_FAILURE
} from './types';

export const updateMetric = (id, metricUpdate) => dispatch => {
    // debugger;
    dispatch({ type: UPDATE_METRIC_START });
    axios
        .put(
            `https://api.airtable.com/v0/app3X8S0GqsEzH9iW/Check-ins/${match.params.clientid}?api_key=keyfahybUIpBkegFv`,
            metricUpdate
        )
        .then(res => {
            console.log('UPDATED METRIC', res);
            dispatch({
                type: UPDATE_METRIC_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: UPDATE_METRIC_FAILURE,
                payload: err.message
            });
        });
};
