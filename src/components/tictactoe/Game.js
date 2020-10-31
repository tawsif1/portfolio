/** @jsx jsx */
import React, { useState, useEffect, createRef } from 'react'
import { Global, css, jsx } from '@emotion/core'
import Squares from './squares'
import Board from './Board'
import bg from '../tictactoe/city.png'
export default function Game() {
    const [player1, setPlayer1] =  useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const winner = calculateWinner(history[stepNumber]);
   const draw = (stepNumber == 9 && ! winner)? 'Draw' : '';

   

    
   
    
   
    
    const xo = player1 ? "X" : "O";



    const announce= ( winner? ("The winner is "+ (player1? "O" : "X" )) : "");

    
    const handleClick = (i) => {
      const stepHistory = history.slice(0, stepNumber+1);
        const current = stepHistory[stepNumber];
      const  squares = [...current];
     

      if (winner || squares[i]){

        
         return;
      }

      squares[i] = xo;
      setHistory( [...stepHistory, squares]);
      setStepNumber(stepHistory.length);
      setPlayer1(!player1);




    }
    const startOver = ( ) => {
        setStepNumber(0);}

        const undo = ( ) => {
            setStepNumber(stepNumber-1);
            setPlayer1( !player1)
        }

    return (<>
    <Global styles={GlobalCSS}  />
    <div css={css`text-align: center; height: 10vh;font: 50px bold; padding: 30px;`}>
      
   {draw}
   {announce}
    </div>
        <div css={css`width: 50vw; height: 50vh;`}>
            <Board  squares={history[stepNumber]} onClick={handleClick} />
        </div>
        <div>
            < button onClick={startOver} css={css` background-color:#EF8099; border: 4px solid black;
             display: block; margin-bottom: 15px; width:10vw; height: 10vh; transform: translate(10vw,-20vh);`}> Start Over </button>
            < button  onClick={undo}  css={css`border: 4px solid black;background-color:#EF8099;
             display: block; margin-bottom: 15px; width:10vw; height: 10vh; transform: translate(10vw,-20vh); `} > undo </button>
        </div>
        
       
        </>
    )
   
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
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  const GlobalCSS = css`
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
   
  }
  body {
   
    background-image: url("https://wallpaperaccess.com/full/2435550.png");
    background-size:cover;
   
  }
  `
