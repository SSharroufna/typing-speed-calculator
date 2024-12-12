import React, { useState, useEffect, useRef } from 'react';
import { generateRandomWord } from './RandomWords';

export default function GameArea({lives, score, setLives, setScore}) {

  const [inputValue, setInputValue] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [correctWrong, setCorrectWrong] = useState([]); // array to keep track of correct and wrong characters
  const[randomWord, setRandomWord] = useState("");
  const inputRef = useRef(null); // keeping track of the input field
  
  // generate ran word
  useEffect(() => {
    setRandomWord(generateRandomWord());
  }, []);

  // focus on input when new word is generated
  useEffect(() => {
    
    setCorrectWrong(Array(randomWord.length).fill('')); // reset styles when new word changes
    if(inputRef.current) inputRef.current.focus();
  }, [randomWord]);

  const handleKeyDown = (event) => {
    if (lives === 0) return; // game over


    let userInput = event.key;
    let currentChar = randomWord[charIndex]; // character to match
    // console.log('Word:', randomWord);

    // console.log('Typed Char:', typedChar);
    // console.log('Current Char:', currentChar);

    let updatedCorrectWrong = [...correctWrong]; 

    // handle backspaces to allow users to fix their mistakes
    if(userInput === 'Backspace'){
      if (charIndex > 0) {
        setCharIndex(charIndex - 1); // move back to prev character
        setCorrectWrong((prev) => { 
          const updated = [...prev];
          updated[charIndex - 1] = ''; // clear feedback for the last character
          return updated;
        });
      }
      return;
    }

    if(charIndex < randomWord.length){ // check if the user has typed the correct character
        if(userInput === currentChar){
          updatedCorrectWrong[charIndex] = 'correct'; // "correct style"
            setCharIndex(charIndex + 1);
        } else{
           updatedCorrectWrong[charIndex] = 'wrong'; // "wrong style"
           setLives((prevLives) => Math.max(0, prevLives - 1));
        }
        
    }
    setCorrectWrong(updatedCorrectWrong);
    
    // check if the user has typed the correct word
    console.log('Char Index:', charIndex);
    console.log('Random Word Length:', randomWord.length);
    if(charIndex  === randomWord.length - 1){
      setInputValue('');
        setScore(score + 1);
        setCharIndex(0);
        setRandomWord(generateRandomWord());
        
    } else{
        setInputValue(event.target.value);
    }

    // // const currentWord = WordList[index];
    // let letter = 0; 
    // let isMismatch = false;

    // // check the validity of the input
    // while (letter < userInput.length && letter < currentWord.length) {
    //   if (userInput[letter] === currentWord[letter]) {
    //     console.log('Correct');
    //     letter++; // increment only if it's a match
    //   } else {
    //     console.log('Incorrect', letter);
    //     isMismatch = true;
    //     break; 
    //   }
    // }

    // // deducting a life if there is a mismatch
    // if (isMismatch) {
    //   setLives((prevLives) => Math.max(0, prevLives - 1));
    //   console.log('Lives left:', lives - 1);
    // }

    // if input matches the current word completely, move onto the next word in the array
//     if (userInput === currentWord) {
//       setRandomWord(generateRandomWord());

//     //   setIndex(index + 1);
//       setInputValue('');
//       setScore(score + 1);
//       console.log('Score:', score + 1);
//     } else {
//       setInputValue(userInput);
//     }
};

  return (
    <div className = "word-container">
      <div className="word-display">
        {randomWord.split('').map((char, index) => ( // split character
          <span
            key = {index}
            className = {`char ${correctWrong[index]} ${ // apply styles per character
              index === charIndex ? 'active' : ''}`} // highlight the current character
          >
            {char}
          </span>
        ))}
      </div>
      <input
        type="text"
        className="input-field"
        value={inputValue}
        ref={inputRef}
        onKeyDown={handleKeyDown}
        onChange = {(event) => setInputValue(event.target.value)}
      />
      {/* <div className="score-lives">
        <p>Score: {score}</p>
        <p>Lives: {lives}</p>
      </div> */}
    </div>
  );
}