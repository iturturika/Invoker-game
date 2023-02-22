import React from 'react'
import './StartedGame.scss';
import invoker from '../../img/invoker.jpg';
import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';

import { restartGame } from '../../actions/restartGame';
const StartedGame = (props) => {

  const firstCircleRef = React.useRef('');
  const secondCircleRef = React.useRef('');

  React.useEffect(() => {
    //display handle key 
    firstCircleRef.current = secondCircleRef.current;
    secondCircleRef.current = props.thirdCircle;

  }, [props.thirdCircle, props.update]);
  const firstCircle = firstCircleRef.current;
  const secondCircle = secondCircleRef.current;
  
  return (
     <div className='mainSection'>
        <h1>Invoker Game by undefined</h1>
        <img src={invoker} alt='invoker' className='img'></img>
        <div className='curent__spell'><img src={quas} alt="quas"></img><p>Forge Spirit</p></div>
        <button className='restart' onClick={() => {restartGame(props.setGameState)}}>Restart</button>
        <ul className='window'>
          <li className='circle'>
            {firstCircle === 'q' || firstCircle === 'Q' ? <img src={quas} alt="quas"></img> : undefined}
            {firstCircle === 'w' || firstCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {firstCircle === 'e' || firstCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {firstCircle === 'й' || firstCircle === 'Й' ? <img src={quas} alt="quas"></img> : undefined}
            {firstCircle === 'ц' || firstCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {firstCircle === 'у' || firstCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {secondCircle === 'q' || secondCircle === 'Q' ? <img src={quas} alt="quas"></img> : null}
            {secondCircle === 'w' || secondCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {secondCircle === 'e' || secondCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {secondCircle === 'й' || secondCircle === 'Й' ? <img src={quas} alt="quas"></img> : null}
            {secondCircle === 'ц' || secondCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {secondCircle === 'у' || secondCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.thirdCircle === 'q' || props.thirdCircle === 'Q' ? <img src={quas} alt="quas"></img> : null}
            {props.thirdCircle === 'w' || props.thirdCircle === 'W' ? <img src={wex} alt="wex"></img> : null}
            {props.thirdCircle === 'e' || props.thirdCircle === 'E' ? <img src={exort} alt="exort"></img> : null}
            {props.thirdCircle === 'й' || props.thirdCircle === 'Й' ? <img src={quas} alt="quas"></img> : null}
            {props.thirdCircle === 'ц' || props.thirdCircle === 'Ц' ? <img src={wex} alt="wex"></img> : null}
            {props.thirdCircle === 'у' || props.thirdCircle === 'У' ? <img src={exort} alt="exort"></img> : null}
          </li>
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

export default StartedGame
