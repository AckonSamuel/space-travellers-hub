import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons.redux';

const rootReducer = combineReducers({
  dragons: dragonsReducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});
