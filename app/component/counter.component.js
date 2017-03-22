import React from 'react';
import {PropTypes} from 'react';
import {Component} from 'react';

import Button from 'react-bootstrap/lib/Button';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="details">
                <h1>{this.props.initialCount}</h1>
                <Button
                    bsStyle="success"
                    bsSize="large"
                    onClick={this.props.onIncrement}>
                    Increment
                </Button>
                &nbsp;
                <Button
                    bsStyle="danger"
                    bsSize="large"
                    onClick={this.props.onDecrement}>
                    Decrement
                </Button>
            </div>
        );
    }
}

Counter.propTypes = {
    initialCount: PropTypes.number,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

Counter.defaultProps = {
    initialCount: 0
};
