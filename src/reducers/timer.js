// src/reducers/timer.js

const initialState = {
  countdown: 60,
};

export const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DECREMENT_COUNTDOWN':
      return {
        ...state,
        countdown: state.countdown - 1,
      };
    default:
      return state;
  }
};
