import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Nav from './Nav.jsx';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBed,
  faCheckSquare,
  faQuestion,
  faAirFreshener,
  faIgloo
} from '@fortawesome/free-solid-svg-icons';

library.add([faBed, faAirFreshener, faIgloo, faCheckSquare, faQuestion]);

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
