import React from 'react'
import './FinishedGame.scss';

import invoker from '../../img/invoker.jpg';
import { restartGame } from '../../actions/restartGame';



const FinishedGame = (props) => {
  return (
     <div className='mainSection'>
        <h1>Invoker Game by <a href='https://twitter.com/iturturika'>ozzy</a></h1>
        <img src={invoker} alt='invoker' className='img'></img>
        <h2>Game finished!</h2>
        <h3>{props.resultGame}{props.resultGame < localStorage.getItem('record') ? ' new record!' : ' seconds'}</h3>
        <button className='button' onClick={() => {restartGame(props.setGameState);}} >Restart</button>
      </div>


  )
}

export default FinishedGame
