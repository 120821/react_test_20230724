import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: props.timer,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.timer !== state.timer) {
      return { timer: props.timer };
    }

    return null;
  }

  render() {
    return (
      <div>
        <h1>Page 1</h1>
        <h2>Timer: {this.state.timer}</h2>
      </div>
    );
  }
}

Page1.propTypes = {
  timer: PropTypes.number.isRequired,
};

export default Page1;
