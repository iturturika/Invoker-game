import React from 'react'
import './PreviusGameState.scss';

import invoker1 from '../../img/invoker1.gif';
import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';

const PreviusGameState = (props) => {
  return (
     <div className='mainSection'>
        <h1>Invoker Game by <a href='https://twitter.com/iturturika'>ozzy</a></h1>
        <img src={invoker1} alt='invoker' className='img'></img>
        <button className='button' onClick={props.startGame}>Start Game</button>
        <ul className='window'>
          <li className='circle'></li>
          <li className='circle'></li>
          <li className='circle'></li>
        </ul>
        <ul className='spells__group'>
          <li className='square'><img src={quas} alt="quas"></img><span>{String.fromCharCode(props.keyQuas)}</span></li>
          <li className='square'><img src={wex} alt="wex"></img><span>{String.fromCharCode(props.keyWex)}</span></li>
          <li className='square'><img src={exort} alt="exort"></img><span>{String.fromCharCode(props.keyExort)}</span></li>
          <li className='square'><img src={nospell} alt="spell1"></img><span>D</span></li>
          <li className='square'><img src={nospell} alt="spell2"></img><span>F</span></li>
          <li className='square'><img src={invoke} alt="invoke"></img><span>{String.fromCharCode(props.keyInvoke)}</span></li>
        </ul>
      </div>


  )
}

export default PreviusGameState
