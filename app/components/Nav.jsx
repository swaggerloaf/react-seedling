import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Spinner from 'react-svg-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
              <FontAwesomeIcon icon="igloo" />
            </Link>
          </li>
          <li>
            <Link to="/todos">
              Todos
              <FontAwesomeIcon icon="check-square" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
              <FontAwesomeIcon icon="question" />
            </Link>
          </li>
          {/* <li>
              <Spinner size="32px" color="fuchsia" />
            </li> */}
        </ul>
      </nav>
    );
  }
}
