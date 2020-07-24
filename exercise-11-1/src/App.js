import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [typedText, setTypedText] = useState(new String("AA"));
  
  function copyText(e) {
    setTypedText(e.target.value);
  }

  // Looks great - what if you needed 50? Can you make this code a bit more dynamic?

  return (
    <div >
      <input type="text" value={typedText} onChange={copyText}></input>
      <input type="text" value={typedText} onChange={copyText}></input>
      <input type="text" value={typedText} onChange={copyText}></input>
      <input type="text" value={typedText} onChange={copyText}></input>
      <input type="text" value={typedText} onChange={copyText}></input>
    </div>
  );
}

export default App;
