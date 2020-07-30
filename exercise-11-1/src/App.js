import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CoordinatedTextboxes from './coordinatedTextboxes';
import _ from 'lodash';

function App() {
  const data = [
    ['id', 'Name', 'Country', 'Email'],
    [0, 'dan', 'Israel', 'dan@gmail.com'],
    [1, 'dana', 'Israel', 'dana@gmail.com'],
    [2, 'anna', 'Israel', 'anna@gmail.com'],
    [3, 'zina', 'UK', 'zina@gmail.com'],
];
  function sortedBy(data, col) {
    return _.sortBy(data, row => row[col]);
    }
    console.log(sortedBy(data.slice(1), 0));
    console.log(sortedBy(data.slice(1), 1));
    console.log(sortedBy(data.slice(1), 2));

  return (
    <>
    <CoordinatedTextboxes number={50}/>
    </>
  );
}

export default App;
