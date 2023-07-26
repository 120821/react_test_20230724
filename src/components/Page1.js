import React from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';

const Page1 = ({ time }) => (
  <div>
    <h1>Page 1</h1>
    <Countdown />
    <p>Time: {time}</p>
  </div>
);

const mapStateToProps = (state) => ({
  time: state.timer.time,
});

export default connect(mapStateToProps)(Page1);
