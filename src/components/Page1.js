// src/components/Page1.js

import React from 'react';
import { connect } from 'react-redux';

const Page1 = ({ countdown }) => (
  <div>
    <h1>This is Page 1</h1>
    <p>Countdown: {countdown} seconds</p>
  </div>
);

const mapStateToProps = (state) => ({
  countdown: state.timer.countdown,
});

export default connect(mapStateToProps)(Page1);
