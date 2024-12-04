import React, { useState } from 'react';
import './App.css'
import { WordList } from '../public/WordList.js'

function App() {
  const [index, setIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key);
    let letter = 0;

    while ( event.target.value[letter] == WordList[index][letter] && letter < WordList[index].length  ) {
        console.log('Correct');
        letter++;
    } 
    console.log(letter);
    console.log(WordList[index].length);

    if ( letter == WordList[index].length){
      setIndex(index + 1);
      setInputValue(''); 
      letter = 0;
    } else {
      setInputValue(event.target.value);
    }
    

   


    // if (event.key === 'Enter') {
    //   console.log('Entered value:', event.key);
    //   setIndex(index + 1);
    //   setItem(WordList[index]);
    //   setInputValue(''); 
    // } else {
    //   console.log('Key pressed:', event.key);
    // }
  }

  return (
    < >
      <div key ={ index } >
      <li className="word-display">{ WordList[index] }</li>
      </div>
      <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleKeyDown}
      />
      </div>
    </>
  )
}
export default App
