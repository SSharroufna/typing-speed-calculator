import React, { useState, useEffect } from 'react';
import { WordList } from '../public/WordList.js';

export default function GameArea({lives, score, setLives, setScore, characters, setCharacters}) {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
 
  const handleKeyDown = (event) => {
    if (lives === 0) return; // game over
    
    const userInput = event.target.value;
    const currentWord = WordList[index];
    let letter = 0; 
    let isMismatch = false;

    // check the validity of the input
    while (letter < userInput.length && letter < currentWord.length) {
      if (userInput[letter] === currentWord[letter]) {
        console.log('Correct');
        letter++; // increment only if it's a match
      } else {
        console.log('Incorrect', letter);
        isMismatch = true;
        break; 
      }
    }

    // deducting a life if there is a mismatch
    if (isMismatch) {
      setLives((prevLives) => Math.max(0, prevLives - 1));
      console.log('Lives left:', lives - 1);
    }

    // if input matches the current word completely, move onto the next word in the array
    if (userInput === currentWord) {
      setIndex(index + 1);
      setInputValue('');
      setScore(score + 1);
      console.log('Score:', score + 1);
      letter = 0;
    } else {
      setInputValue(userInput);
    }
  };

  return (
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
  );
}
