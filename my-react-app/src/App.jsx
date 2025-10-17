import { useState } from 'react';

function Square() {
  const [squares, setSquares] = useState(Array(9).fill(null)); 

  function handleClick() {
    setValue('X'); 
  }

  return (
    <button className="square">{value}</button> 
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]}/>
        <Square value={square[2]}/>
      </div>
      <div className="board-row">
        <Square value={square[3]}/>
        <Square value={square[4]}/>
        <Square value={square[5]}/>
      </div>
      <div className="board-row">
        <Square value={square[6]}/>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
      </div>
    </>
  ); 
}