import { combineReducers } from 'redux';
import clientReducer from './clientReducer';
import coachReducer from './coachReducer';
import authReducer from './authReducer';

export default combineReducers({
    client: clientReducer,
    coach: coachReducer,
    auth: authReducer
});
