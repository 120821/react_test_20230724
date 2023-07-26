// src/components/Page2.js

import React from 'react';
import { connect } from 'react-redux';

const Page2 = ({ countdown }) => (
  <div>
    <h1>This is Page 2</h1>
    <p>Countdown: {countdown} seconds</p>
  </div>
);

const mapStateToProps = (state) => ({
  countdown: state.timer.countdown,
});

export default connect(mapStateToProps)(Page2);
