import {combineReducers, configureStore, applyMiddleware} from '@reduxjs/toolkit';
import { rocketReducer } from './actions_reducers';
import { thunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({
    rocket: rocketReducer
})
const store = configureStore({
    reducer: rootReducer
}, applyMiddleware(thunkMiddleware));

export default store;
