import React from 'react'
import './FinishedGame.scss';

import invoker from '../../img/invoker.jpg';
import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';



const FinishedGame = () => {
  return (
     <div className='mainSection'>
        <h1>Invoker Game by undefined</h1>
        <img src={invoker} alt='invoker' className='img'></img>
        <h2>Game finished!</h2>
        <h3>8.32s</h3>
        <button className='button'>Start Game</button>
      </div>


  )
}

export default FinishedGame
