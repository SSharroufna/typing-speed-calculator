import React, { useState, useEffect } from 'react';
import './App.css'
import { WordList } from '../public/WordList.js'
import StatsPanel from './StatsPanel'

function App() {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [elapsedTime, setElapsedTime] = useState(0);


  let letter = 0; // tracks the number of correct letters

  /** Timer */
  useEffect(() => {
        if (index >= WordList.length) return; // stop the timer when the game is over
      
        const timer = setInterval(() => {
          if( lives == 0) return;
          setElapsedTime((prevTime) => prevTime + 1);
        }, 1000);
      
        return () => clearInterval(timer);
      }, [lives]); 
  

      /** Reset Game when Game Over */
  function resetGame() {
    setIndex(0); // reset to the first word
    setInputValue(''); // clear input field
    setScore(0); // reset score
    setElapsedTime(0); // reset elapsed time
    setLives(3); // reset lives to 3
  }


  /** Handle User Keyboard Input */
  const handleKeyDown = (event) => {

    if(lives == 0) return; // game over
    
    console.log('Key pressed:', event.key);
    
    const userInput = event.target.value;
    const currentWord = WordList[index];

    letter = 0; 
    let isMismatch = false;

    // check the validity of the input
    while ( letter < userInput.length && letter < currentWord.length  ) {
        if(userInput[letter] == currentWord[letter]){
          console.log('Correct'); 
          letter++; // incremenent only if its a match
        }
        else{
          console.log('Incorrect', letter);
          isMismatch = true;
          break; // stop further comparsions on mismatch
        }
    } 
  
    console.log("Correct letters so far:", letter);
    console.log("Current word length:", currentWord.length);

    // deducting a life if there is a mismatch
    if (isMismatch) {
      setLives((prevLives) => Math.max(0, prevLives - 1));
      console.log('Lives left:', lives - 1);
    }

    // if input matches the current word completely move onto the next word in the array
    if ( userInput == currentWord){
      setIndex(index + 1);
      setInputValue(''); 
      setScore(score + 1);
      console.log('Score: ', score + 1);
      letter = 0;
     
    } else {
      setInputValue(userInput);
    }
  
  }

  return (
   <div className = "game-container">
  {/** Scores and lives display */}
   
    <div className="lives-display">Lives: {lives}</div>
    <div className="time-display">Time: {elapsedTime} seconds</div>
    <div className="score-display">Score: {score}</div>

  {/** Word game area */}
  {lives > 0 ? ( // if full lives keep game going
    <>
      
      <div>
        <span className="word-display">{WordList[index]}</span>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleKeyDown}
          placeholder="Type here..."
        />
      </div>
    </>
  ) : ( // if zero lives display game over and allow user to reset game
<>
      <StatsPanel score={score} elapsedTime={elapsedTime} lives={lives}/>
      <button onClick={resetGame}>Restart Game</button>
      </>
  )}
</div>
  );
}
export default App
