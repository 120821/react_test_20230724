// src/components/Countdown.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const Countdown = ({ countdown, decrementCountdown }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      decrementCountdown();
    }, 1000);

    return () => clearInterval(timer);
  }, [decrementCountdown]);

  return <div>{countdown} seconds left</div>;
};

const mapStateToProps = (state) => ({
  countdown: state.timer.countdown,
});

const mapDispatchToProps = (dispatch) => ({
  decrementCountdown: () => dispatch({ type: 'DECREMENT_COUNTDOWN' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Countdown);
