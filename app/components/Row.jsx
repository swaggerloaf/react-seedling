import React, { Component } from 'react'

class Row extends Component {

  render() {
    return (
      <a href="#" className="btn">
              Name <span className="badge badge-success">{this.props.name}</span>
      </a>
    );
  }
}

export default Row;
