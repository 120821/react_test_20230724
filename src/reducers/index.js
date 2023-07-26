// src/reducers/index.js

import { combineReducers } from 'redux';
import { timerReducer } from './timer';

export const rootReducer = combineReducers({
  timer: timerReducer,
  // add other reducers here
});
