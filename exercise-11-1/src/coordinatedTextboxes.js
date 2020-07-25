import React from 'react';
import { useState } from 'react';


export default function CoordinatedTextboxes(props){
    const {number} = props;
    const [typedText, setTypedText] = useState(new String(""));
  
    function copyText(e) {
        setTypedText(e.target.value);
    }


    return (
        <>
        {[...Array(number)].map((x, i) =>
        
        <input type="text" value={typedText} onChange={copyText}/>
        
        )}
        </>
    );
}