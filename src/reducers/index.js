import { combineReducers } from 'redux';
import { START_COUNTDOWN, STOP_COUNTDOWN, SET_TIME } from '../actions';

const initialState = {
  countdown: 10,
  time: 10,
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_COUNTDOWN:
      return { ...state, countdown: action.payload };
    case STOP_COUNTDOWN:
      return { ...state, countdown: 0 };
    case SET_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  timer: timerReducer,
});
