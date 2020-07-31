import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import _ from 'lodash';

export default function SortableTable(props){
    const {data} = props;
 //   const [ headers, setHeaders ] = useState(data[0]);
 //   const [ sortedItems, setSortedItems ] = useState(data);
    const [sortColumn , setSortColumn] = useState(0);

    const [isAscending, setIsAscending] = useState(true)
    const headers = data[0];
    const rows = data.slice(1); 

    function sortTable(column){
        //debugger;
        if(column == sortColumn){
        setIsAscending(isAscending => !isAscending);
        }


        setSortColumn(column);
    }

     var sorted =_.sortBy(rows, row => row[sortColumn]);
     debugger;


     if(!isAscending){
        sorted.reverse();
     }


    return(
        <>
        <table>
            <thead>
            <tr>
            {headers.map((header, index) => (
              
            <th key={header} onClick={(e) => sortTable(index)}>            
                    
                    {header}
            </th>
            ))}
              </tr>
            </thead>
            <tbody>
            {sorted.map((row, i) => (
                <tr key={i}>
                {row.map((col, j) => (
                    <td key={j+'_'+headers[j]}>
                        {col}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}