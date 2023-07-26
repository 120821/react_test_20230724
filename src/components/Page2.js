import React from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';

const Page2 = ({ time }) => (
  <div>
  <h2>Page 2</h2>
  <Countdown />
  <p>Time: {time}</p>
  </div>
);

const mapStateToProps = (state) => ({
  time: state.timer.time,
});

export default connect(mapStateToProps)(Page2);
