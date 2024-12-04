import React, { useState } from 'react';
import './App.css'
import { WordList } from '../public/WordList.js'

function App() {
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState(WordList[index]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
      console.log('Entered value:', event.key);
      setIndex(index + 1);
      setItem(WordList[index]);
      setInputValue(''); 
    } else {
      console.log('Key pressed:', event.key);
    }
  }

  return (
    < >
      <div key ={ index } >
      <li className="word-display">{ item }</li>
      </div>
      <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      </div>
    </>
  )
}
export default App
