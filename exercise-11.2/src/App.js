import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { number } from 'prop-types';

function App() {
  const [seconds, setSeconds] = useState(0);
  
  function calculateTime(multiplier, e) {
    debugger;
    var newValue = Number(e.target.value) * multiplier;
    setSeconds(newValue);
  }


  return (
    <div >
      <input type="number" name="seconds" value={seconds} onChange={(e) => calculateTime(1,e)}></input>
      <input type="number" name="minutes" value={seconds / 60} onChange={(e) => calculateTime(60,e)}></input>
      <input type="number"  name="hours" value={seconds / 3600} onChange={(e) => calculateTime(3600,e)}></input>
    </div>
  );
}

export default App;
