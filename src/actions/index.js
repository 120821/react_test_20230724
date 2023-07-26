export const START_COUNTDOWN = 'START_COUNTDOWN';
export const STOP_COUNTDOWN = 'STOP_COUNTDOWN';
export const SET_TIME = 'SET_TIME';

export const startCountdown = (countdown) => ({
  type: START_COUNTDOWN,
  payload: countdown,
});

export const stopCountdown = () => ({
  type: STOP_COUNTDOWN,
});

export const setTime = (time) => ({
  type: SET_TIME,
  payload: time,
});
