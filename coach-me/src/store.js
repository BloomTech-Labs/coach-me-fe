import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/clientReducer';

// const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;


 