import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const reducers = combineReducers({
    missionReducer,
});