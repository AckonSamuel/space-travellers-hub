import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';

const reducers = combineReducers({
  missionReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
