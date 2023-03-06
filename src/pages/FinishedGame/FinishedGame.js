import React from 'react'
import './FinishedGame.scss';

import invoker1 from '../../img/invoker1.gif';
import { restartGame } from '../../actions/restartGame';
import herald from '../../img/herald.webp';
import guardian from '../../img/guardian.webp';
import crusader from '../../img/crusader.webp';
import archon from '../../img/archon.webp';
import legend from '../../img/legend.webp';
import ancient from '../../img/ancient.webp';
import devine from '../../img/devine.webp';
import imortal from '../../img/imortal.webp';

const FinishedGame = (props) => {
  const restart = (event) => {
    if(event.key === 'Enter'){
      props.setGameState('Waiting');
      document.removeEventListener('keydown', restart);
    }
  }
  const onEnter = () => {
    document.addEventListener('keydown', restart);
  }
  return (
     <div className='mainSection' onKeyDown={onEnter()}>
        <h1>Invoker Game by <a href='https://twitter.com/iturturika'>ozzy</a></h1>
        <img src={invoker1} alt='invoker' className='img'></img>
        <h2>Game finished!</h2>
        {props.resultGame >= 25 ? <img src={herald} alt='herald'></img> : null}
        {props.resultGame >= 20 && props.resultGame < 25 ? <img src={guardian} alt='guardian'></img> : null}
        {props.resultGame >= 15 && props.resultGame < 20 ? <img src={crusader} alt='crusader'></img> : null}
        {props.resultGame >= 10 && props.resultGame < 15 ? <img src={archon} alt='archon'></img> : null}
        {props.resultGame >= 9 && props.resultGame < 10 ? <img src={legend} alt='legend'></img> : null}
        {props.resultGame >= 8 && props.resultGame < 9 ? <img src={ancient} alt='ancient'></img> : null}
        {props.resultGame >= 7 && props.resultGame < 8 ? <img src={devine} alt='devine'></img> : null}
        {props.resultGame < 7 ? <img src={imortal} alt='ancient'></img> : null}
        <h3>{props.resultGame} seconds</h3>
        <p>{props.resultGame < props.record ? 'New record!' : null}</p>
        <button className='button' onClick={() => {restartGame(props.setGameState);}} >Restart</button>
      </div>


  )
}

export default FinishedGame
