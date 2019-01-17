import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-svg-spinner';

export default class Nav extends Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Spinner size="32px" color="fuchsia" />
            </li>
          </ul>
        </nav>
      </>
    );
  }
}
