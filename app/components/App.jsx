import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Nav from './Nav.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    //this.state = { auth: new Auth(this.props.history) };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="body">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}
