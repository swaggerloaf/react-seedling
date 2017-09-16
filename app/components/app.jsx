import React, { Component } from 'react'

import FaAutomobile from 'react-icons/lib/fa/automobile'

export default class App extends Component {
  render() {
    return (
      <h3> Lets go for a {this.props.name} <FaAutomobile /> </h3>
    )
  }
}
