import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startCountdown, stopCountdown, setTime } from '../actions';

const Countdown = ({ countdown, time, startCountdown, stopCountdown, setTime }) => {
  const [timer, setTimer] = useState(countdown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer((t) => t - 1);
        setTime(timer - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      stopCountdown();
    };
  }, [timer, setTime, stopCountdown]);

  return (
    <div>
      <h1>Countdown: {timer} seconds</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countdown: state.timer.countdown,
  time: state.timer.time,
});

const mapDispatchToProps = {
  startCountdown,
  stopCountdown,
  setTime,
};

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
