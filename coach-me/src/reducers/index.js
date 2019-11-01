import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import coachReducer from './coachReducer';

export default combineReducers({
    client: clientReducer,
    coach: coachReducer
});
