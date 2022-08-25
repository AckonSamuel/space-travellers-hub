import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import { rocketReducer } from './rockets/actions_reducers';
import dragonsReducer from './dragons/dragons.redux';

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
  missionReducer,
  rocket: rocketReducer,
  dragons: dragonsReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;
