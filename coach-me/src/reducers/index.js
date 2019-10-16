import { combineReducers } from 'redux';
// import authReducer from './authReducer'
import clientReducer from './clientReducer';

export default combineReducers({
    client: clientReducer
});
