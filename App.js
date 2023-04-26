import React from 'react'; 
import { useState } from 'react';
import ListOfWords from './ListOfWords';

//const [word, setWord] = useState("");

function Hangman({ letter, onPressLetter}) {
  return (
    <button className='hangman' onClick={onPressLetter}>
      {letter}
    </button>
  );
}

// picks the word
let word = words.key(Math.random() * 10);


const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function Game({ }) {
  const [usedLetters, setUsedLetters] = useState("");
  const [message, setMessage] = useState("");
  const [letterIn, setLetter] = useState("");
  
  letterIn = setLetter(letter); // doesnt work

  if(letterIn == )

  
  // someone input the letter
  // check to see if it was alreayd used
  // if yes --> make them choose another one
  // if no --> check to see if in word selected
    // add to used letters
    // if in word --> fill in
      // else add to picture

  function handleClick() {

  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="message">{message}</div>
      <div className="word-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  )
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {

  const [playerMove, setPlayerMove] = useState(1); 
  const [firstMove, setFirstMove] = useState(0); 
  const [message, setMessage] = useState(""); 
 
  /* Only work in handleclick */

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();

    //checks the first X move and returns whether or not it is a good choice 
    if((playerMove === 1) && (xIsNext) && (i === 0 || i === 2 || i === 6 || i === 8)){
      //if it is a good choice then variables increase
      setPlayerMove(2); 
      setFirstMove(i);
      setMessage("Good Move!"); 
    }
    if((playerMove === 1) && (xIsNext) && (i === 1 || i === 3 || i === 4 || i === 5 || i === 7)){
      setMessage("Not a good move!"); 
      return;
    }

    //O's turn
    if((playerMove === 2)){
      setPlayerMove(3); 
      setMessage(""); 
    }

    //X's second move
    //if O is in the middle spot then X must go diaganol
    if((playerMove === 3) && (squares[4] === 'O')) {
      setPlayerMove(4); 
      if(firstMove === 0){
        if(i===8) {
          setMessage("Good Move!"); 
        }
        else {
          setMessage("Not a good move!"); 
          return;
        }
      }
      if(firstMove === 2){
        if(i===6) {
          setMessage("Good Move!"); 
        }
        else {
          setMessage("Not a good move!");
          return; 
        }
      }
      if(firstMove === 6){
        if(i===2) {
          setMessage("Good Move!"); 
        }
        else {
          setMessage("Not a good move!");
          return; 
        }
      }
      if(firstMove === 8){
        if(i===0) {
          setMessage("Good Move!"); 
        }
        else {
          setMessage("Not a good move!");
          return; 
        }
    }
    //if O is not in the middle spot
  } 
   if ((playerMove === 3) && (squares[4] !== 'O')) {
      setPlayerMove(4); 
       //X must place in the the corners diaganol to it 
       if(firstMove === 0) {
         if(i===2) {
          setMessage("Good Move!"); 
         }
         if(i===6) { 
           setMessage("Good Move!"); 
         }
         else {
           setMessage("Not a good move!"); 
           return; 
         }
       }
       if(firstMove === 2) {
         if(i===0) {
           setMessage("Good Move!"); 
         }
         if(i===8) {
           setMessage("Good Move!"); 
         }
         else {
           setMessage("Not a good move!"); 
           return; 
         }
       }
       if(firstMove === 6) {
         if(i===0) {
           setMessage("Good Move!"); 
         }
         if(i===8) {
           setMessage("Good Move!"); 
         }
         else {
          setMessage("Not a good move!"); 
          return; 
         }
       }
       if(firstMove === 8) {
         if(i===6) {
           setMessage("Good Move!"); 
         }
         if(i===2) {
           setMessage("Good Move!"); 
         }
         else {
           setMessage("Not a good move!"); 
           return; 
         }
       }

    //O's turn
    if((playerMove === 4)){
      setPlayerMove(5); 
      setMessage(""); 
    }
}

    

    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  } 

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="message">{message}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">

      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
