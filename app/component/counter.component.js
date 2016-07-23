import React from 'react';
import {PropTypes} from 'react';
import {Component} from 'react';

import Redux from 'redux';

import Button from 'react-bootstrap/lib/Button';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.initialCount};
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(
      {count: this.state.count + 1}
    );
  }

  decrement() {
    this.setState(
      {count: this.state.count - 1}
    );
  }

  render() {
    return (
      <div className="details" align="center">
        <h1><big>{this.state.count}</big></h1>
        <Button
          bsStyle="success"
          bsSize="large"
          onClick={this.increment}>
          Increment
        </Button>
        &nbsp;
        <Button
          bsStyle="danger"
          bsSize="large"
          onClick={this.decrement}>
          Decrement
        </Button>
      </div>
    );
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number
};

Counter.defaultProps = {
  initialCount: 0
};

/*

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counter);

const render = () => {
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
  store.dispatch({type: INCREMENT});
});

*/
