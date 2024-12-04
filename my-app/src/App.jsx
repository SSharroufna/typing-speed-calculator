// import {useState, useEffect} from 'react'
import React from 'react'
import './App.css'
import { WordList } from '../public/WordList.js'

function App() {

  return (
    <div >
        { WordList.map((item , index) => (
            <div key ={ index } >
            <li className="word-display">{ item }</li>
            </div>
        ))}
    </div>
  )
}
export default App
