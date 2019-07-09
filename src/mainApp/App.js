import React from 'react';

import CalendarBody from '../body/CalendarBody';
import CalendarHead from '../head/CalendarHead';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Redux calendar app</h1>
      <div className="main-container">
        <CalendarHead />
        <CalendarBody />
      </div>
    </div>
  );
}

export default App;
