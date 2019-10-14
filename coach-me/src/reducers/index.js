import {combineReducers } from 'redux'
import authReducer from './authReducer'
import clientReducer from './clientRuducer'

export default combineReducers({
  auth: authReducer,
  client: clientReducer
})