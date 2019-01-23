import React, { Component } from 'react';

// Alert component
//Provide contextual feedback messages for typical user actions

export default class Alert extends Component {
  render() {
    let className = 'alert';
    if (this.props.context) {
      className += ' alert-' + this.props.context;
    } else {
      className += ' alert-info';
    }
    return (
      <div className={className} role="alert">
        {this.props.text}
      </div>
    );
  }
}
