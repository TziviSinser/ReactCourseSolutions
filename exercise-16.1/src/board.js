import React from 'react';
import ReactDOM from 'react-dom';

export default function Board(props){
    const {squaresNum} = props;
    const [items, setItems] = useState(new Array[squaresNum]); 
debugger;
    const redIndex = Math.floor(Math.random()* squaresNum); 

    const styles = {
        redStyle: {
            color: "red",
            width: "50px",
            heigt: "50px"
        },
        greyStyle:{
            color: "grey",
            width: "50px",
            heigt: "50px"
        }
      }

    function onSquareClicked(index){
        if(index == redIndex){
            
        }
    }

    return(
        <>
         {items.map((item, i) =>
        
        <button style={ i== redIndex ? styles.redStyle : styles.greyStyle} key={i} onClick={(i) => onSquareClicked(i)}/>
        
        )}
        </>
    );
}