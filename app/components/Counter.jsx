import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Counter</h5>
            <p>
            Clicked: {this.props.value} times
            {' '}
            <a href="#" className="btn btn-success" onClick={this.props.increment}>
              +
            </a>
            {' '}
            <a href="#" className="btn btn-success"  onClick={this.props.decrement}>
              -
            </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
