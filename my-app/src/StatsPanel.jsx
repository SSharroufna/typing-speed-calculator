



import React, {useState} from 'react'

function StatsPanel({score, elapsedTime}) {

    

    return (
        <>
        <h1>Game Over</h1>
        <h2>Final Score: {score}</h2>
        <h2>Elapsed Time: {elapsedTime} seconds</h2>
       
      </>
    )
}

export default StatsPanel;
