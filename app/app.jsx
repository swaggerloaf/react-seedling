import React, { Component } from 'react'
import FaAutomobile from 'react-icons/lib/fa/automobile'

class App extends React.Component {
  render() {
    return <h3> Lets go for a {this.props.name} <FaAutomobile /> </h3>
  }
}

export default App;
