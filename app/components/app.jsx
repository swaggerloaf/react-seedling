import React, { Component } from "react";
import Row from "./Row.jsx";

function App() {
  return (
    <div>
      <div className="text-success text-right">{React.version}</div>
      <table className="table table-success">
        <thead>
          <tr>
            <th scope="col">Names</th>
          </tr>
        </thead>
        <tbody>
          <Row name="Mary" />
          <Row name="Glenn" />
        </tbody>
      </table>
    </div>
  );
}

export default App;
