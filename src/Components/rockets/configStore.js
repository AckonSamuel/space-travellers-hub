import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { rocketReducer } from './actions_reducers';

const rootReducer = combineReducers({
  rocket: rocketReducer,
});
const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(thunkMiddleware));

export default store;
