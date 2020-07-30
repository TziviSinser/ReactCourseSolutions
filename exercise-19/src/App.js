import React from 'react';
import './App.css';
import SortableTable from './sortableTable';
import _ from 'lodash';

function App() {
  const data = [
    ['id', 'Name', 'Country', 'Email'],
    [0, 'dan', 'Israel', 'dan@gmail.com'],
    [1, 'dana', 'Israel', 'dana@gmail.com'],
    [2, 'anna', 'Israel', 'anna@gmail.com'],
    [3, 'zina', 'UK', 'zina@gmail.com'],
];

/*
0_id, 0_Name, 0_Country, 0_Email
1_id, 1_Name, 1_Country, 1_Email
2_id, 2_Name, 2_Country, 2_Email
3_id, 3_Name, 
*/

return (
  
  <div>
      <SortableTable data={data} />
  </div>
)
}

export default App;
