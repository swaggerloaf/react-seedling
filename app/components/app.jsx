import React from 'react'
import Row from './Row.jsx';

function App() {
  return (
    <div>
      <div className="text-success text-right">{React.version}</div>
      <Row name="Mary" />
      <Row name="Glenn" />
    </div>
  );
}

export default App;
