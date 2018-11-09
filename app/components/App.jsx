import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blanchedalmond' }}>
        <h4>My form!!</h4>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
