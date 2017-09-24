import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
       <h3>Header Here</h3>
        {this.props.children}
      </div>
    )
  }
}

export default App;
