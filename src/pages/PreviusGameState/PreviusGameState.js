import React from 'react'
import './PreviusGameState.scss';

import invoker from '../../img/invoker.jpg';
import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';

import {startGame} from '../../actions/startGame.js';

const PreviusGameState = (props) => {
  return (
     <div className='mainSection'>
        <h1>Invoker Game by undefined</h1>
        <img src={invoker} alt='invoker' className='img'></img>
        <button className='button' onClick={() => {startGame(props.setGameState)}}>Start Game</button>
        <ul className='window'>
          <li className='circle'></li>
          <li className='circle'></li>
          <li className='circle'></li>
        </ul>
        <ul className='spells__group'>
          <li className='square'><img src={quas} alt="quas"></img><span>Q</span></li>
          <li className='square'><img src={wex} alt="wex"></img><span>W</span></li>
          <li className='square'><img src={exort} alt="exort"></img><span>E</span></li>
          <li className='square'><img src={nospell} alt="spell1"></img><span>D</span></li>
          <li className='square'><img src={nospell} alt="spell2"></img><span>F</span></li>
          <li className='square'><img src={invoke} alt="invoke"></img><span>R</span></li>
        </ul>
      </div>


  )
}

export default PreviusGameState
