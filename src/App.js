import React from 'react';
import PreviusGameState from './pages/PreviusGameState/PreviusGameState.js';
import StartedGame from './pages/StartedGame/StartedGame.js';
import FinishedGame from './pages/FinishedGame/FinishedGame.js';
import ReactGA from "react-ga4";


import './app.scss';

import quas from './img/invoker_quas.png';
import wex from './img/invoker_wex.png';
import exort from './img/invoker_exort.png';
import invokeImg from './img/invoker_invoke.png';
import nospell from './img/no_spell.png';

import cold_snap from './img/invoker_cold_snap.png';
import ghost_walk from './img/invoker_ghost_walk.png';
import ice_wall from './img/invoker_ice_wall.png';
import emp from './img/invoker_emp.png';
import tornado from './img/invoker_tornado.png';
import alacrity from './img/invoker_alacrity.png';
import sun_strike from './img/invoker_sun_strike.png';
import forge_spirit from './img/invoker_forge_spirit.png';
import chaos_meteor from './img/invoker_chaos_meteor.png';
import deafening_blast from './img/invoker_deafening_blast.png';
import { Overlay } from './components/Overlay/Overlay.js';

function App() {
ReactGA.initialize("G-26SK3D39ZL");
const [gameState, setGameState] = React.useState('Waiting');
const [firstCircle, setFirstCircle] = React.useState('');
const [secondCircle, setSecondCircle] = React.useState('');
const [thirdCircle, setThirdCircle] = React.useState('');
const [spell1, setSpell1] = React.useState('nospell');
const [spell2, setSpell2] = React.useState('nospell');
const [update, setUpdate] = React.useState(0);
const [randomSpell, setRandomSpell] = React.useState();
const [resultGame, setResultGame] = React.useState();
const [record, setRecord] = React.useState(999999);
const [keyQuas, setKeyQuas] = React.useState(81);
const [keyWex, setKeyWex] = React.useState(87);
const [keyExort, setKeyExort] = React.useState(69);
const [keyInvoke, setKeyInvoke] = React.useState(82);
const [onClickOverlay, setOnClickOverlay] = React.useState(false);
const [bindKeyName, setBindKeyName] = React.useState('QUAS');
const [arr, setArr] = React.useState(["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"]);
const updateRef = React.useRef(update);
React.useEffect(() => {updateRef.current = update}, [update]);

const stopTimer = (timerId) => {
  clearInterval(timerId);
  console.log('cleared');
}

const startTimer = () => {
  let value = 0;
    const timerI = setInterval(function(){
      value = value + 1/60;
      if(updateRef.current === 9){
        setResultGame(value.toFixed(2));
        setGameState("Finished");
        if(value < record){
            setRecord(value);
        }
        stopTimer(timerI);
      };
    }, 1000/60);
}


const generateSpell = () => {
  let rndIndex = Math.floor(Math.random() * arr.length);
  setArr(arr.filter((el) => el !== arr[rndIndex]));
  setRandomSpell(arr[rndIndex]);
  console.log(rndIndex);
}

const verifingSpell = (spell) => {
  if(spell === randomSpell){
    generateSpell();
    
          setUpdate(update + 1);
  }
}

const invokeSpell = (key) => {
  if(key === keyInvoke){
    let spell = `${firstCircle}${secondCircle}${thirdCircle}`;

    if(spell === `${keyQuas}${keyQuas}${keyQuas}`){
      setSpell1(`cold snap`);
      spell = `cold snap`;
      if(spell1 !== `cold snap`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyQuas}${keyQuas}${keyExort}` || spell === `${keyQuas}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyQuas}`){
      setSpell1(`ice wall`);
      spell = `ice wall`;
      if(spell1 !== `ice wall`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyQuas}${keyQuas}${keyWex}` || spell === `${keyQuas}${keyWex}${keyQuas}` || spell === `${keyWex}${keyQuas}${keyQuas}`){
      setSpell1(`ghost walk`);
      spell = `ghost walk`;
      if(spell1 !== `ghost walk`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyWex}${keyWex}${keyWex}`){
      setSpell1(`emp`);
      spell = `emp`;
      if(spell1 !== `emp`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyWex}${keyWex}${keyQuas}` || spell === `${keyWex}${keyQuas}${keyWex}` || spell === `${keyWex}${keyQuas}${keyQuas}`){
      setSpell1(`tornado`);
      spell = `tornado`;
      if(spell1 !== `tornado`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyWex}${keyWex}${keyExort}` || spell === `${keyWex}${keyExort}${keyWex}` || spell === `${keyExort}${keyQuas}${keyQuas}`){
      setSpell1(`alacrity`);
      spell = `alacrity`;
      if(spell1 !== `alacrity`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyExort}${keyExort}${keyExort}`){
      setSpell1(`sun strike`);
      spell = `sun strike`;
      if(spell1 !== `sun strike`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyExort}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyExort}` || spell === `${keyQuas}${keyExort}${keyExort}`){
      setSpell1(`forge spirit`);
      spell = `forge spirit`;
      if(spell1 !== `forge spirit`){
        setSpell2(spell1);
      }
    }
    
    if(spell === `${keyExort}${keyExort}${keyWex}` || spell === `${keyExort}${keyWex}${keyExort}` || spell === `${keyWex}${keyExort}${keyExort}`){
      setSpell1(`chaos meteor`);
      spell = `chaos meteor`;
      if(spell1 !== `chaos meteor`){
        setSpell2(spell1);
      }
    }

    if(spell === `${keyQuas}${keyWex}${keyExort}` || spell === `${keyQuas}${keyExort}${keyWex}` || spell === `${keyWex}${keyQuas}${keyExort}` || spell === `${keyWex}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyWex}` || spell === `${keyExort}${keyWex}${keyQuas}`){
      setSpell1(`deafening blast`);
      spell = `deafening blast`;
      if(spell1 !== `deafening blast`){
        setSpell2(spell1);
      }
    }
    
    verifingSpell(spell);

  }
}

const setCircles = (key) => {
  if((key === keyQuas || key === keyWex || key === keyExort) && gameState === "Started"){
    setFirstCircle(secondCircle);
    setSecondCircle(thirdCircle);
    setThirdCircle(key);
  }
}

const startGame = () => {
  setGameState("Started");
  generateSpell();
  startTimer();
}

const endGame = () => {
  setGameState("Waiting");
  setSpell1('nospell');
  setSpell1('nospell');
  setSpell2('nospell');
  setFirstCircle('');
  setSecondCircle('');
  setThirdCircle('');
  setUpdate(0);
  setArr(["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"]);
  console.log("Game waiting");
}

const changingGameState = (key) => {
  if(key === 13 && gameState === "Waiting"){
    startGame();
    console.log("Game started");
  }
  if(key === 13 && (gameState === "Started" || gameState === "Finished")){
    endGame();
  }
};

const handleKeyClick = (event) => {
    console.log(event.keyCode);
    changingGameState(event.keyCode);
    setCircles(event.keyCode);
    invokeSpell(event.keyCode);
}

React.useEffect(()=> {
  document.addEventListener("keydown", handleKeyClick);
  return () => {
    document.removeEventListener("keydown", handleKeyClick);
  }
})



const setKeyBinds = (key) => {
  const setKey = (event) => {
      key(event.keyCode);
      setOnClickOverlay(false);
      document.removeEventListener('keydown', setKey);
  }
  document.addEventListener('keydown', setKey);
}
return (

      <div className="App">
        { onClickOverlay ? <Overlay keyName={bindKeyName}/> : null}
      <div className='controlls'>
        <h2>Controlls</h2>
        <ul className='controll__list'>
          <li><img src={quas} alt="quas"></img><p>{String.fromCharCode(keyQuas)} - Quas</p></li>
          <li><img src={wex} alt="wex"></img><p>{String.fromCharCode(keyWex)} - Wex</p></li>
          <li><img src={exort} alt="exort"></img><p>{String.fromCharCode(keyExort)} - Exort</p></li>
          <li><img src={nospell} alt="spell1"></img><p>D - Spell 1 </p></li>
          <li><img src={nospell} alt="spell2"></img><p>F - Spell 2 </p></li>
          <li><img src={invokeImg} alt="invoke"></img><p>{String.fromCharCode(keyInvoke)} - Invoke</p></li>
        </ul>
        <h3 className='h3__keybinds'>Set keybinds <button className='key__binds__button' onClick={() => {setKeyQuas(81); setKeyWex(87); setKeyExort(69); setKeyInvoke(82);}}>Reset</button></h3>
        <div className='keybinds'>
          <button className='key__binds__button' onClick={() => {setOnClickOverlay(true); setKeyBinds(setKeyQuas); setBindKeyName('QUAS');}}>QUAS</button>
          <button className='key__binds__button' onClick={() => {setOnClickOverlay(true); setKeyBinds(setKeyWex); setBindKeyName('WEX');}}>WEX</button>
          <button className='key__binds__button' onClick={() => {setOnClickOverlay(true); setKeyBinds(setKeyExort); setBindKeyName('EXORT');}}>EXORT</button>
          <button className='key__binds__button' onClick={() => {setOnClickOverlay(true); setKeyBinds(setKeyInvoke); setBindKeyName('INVOKE');}}>INVOKE</button>
        </div>
      </div>
      {gameState === 'Waiting' ? <PreviusGameState gameState={gameState} startGame={startGame} endGame={endGame} keyQuas={keyQuas} keyWex={keyWex} keyExort={keyExort} keyInvoke={keyInvoke} setGameState={setGameState} record={record} setRecord={setRecord} randomSpell={randomSpell} setResultGame={setResultGame} setRandomSpell={setRandomSpell} spell1={spell1} spell2={spell2} setSpell1={setSpell1} setSpell2={setSpell2} firstCircle={firstCircle} setFirstCircle={setFirstCircle} secondCircle={secondCircle} setSecondCircle={setSecondCircle} thirdCircle={thirdCircle} setThirdCircle={setThirdCircle} update={update} setUpdate={setUpdate}/> : null}
      {gameState === 'Started' ? <StartedGame setGameState={setGameState} endGame={endGame} keyQuas={keyQuas} keyWex={keyWex} keyExort={keyExort} keyInvoke={keyInvoke} randomSpell={randomSpell} spell1={spell1} spell2={spell2} firstCircle={firstCircle} setFirstCircle={setFirstCircle} secondCircle={secondCircle} setSecondCircle={setSecondCircle} thirdCircle={thirdCircle} setThirdCircle={setThirdCircle} update={update} setUpdate={setUpdate}/> : null}
      {gameState === 'Finished' ? <FinishedGame setGameState={setGameState} endGame={endGame}  record={record} setRecord={setRecord} resultGame={resultGame}/> : null}
      <div className='spells'>
        <h2>Spells</h2>
        <ul className='spell__list'>
          <li><img src={cold_snap} alt="cold_snap"></img><p>Cold Snap - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)}</p></li>
          <li><img src={ghost_walk} alt="ghost_walk"></img><p>Ghost Walk - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)}</p></li>
          <li><img src={ice_wall} alt="ice_wall"></img><p>Ice Wall - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyQuas)} {String.fromCharCode(keyExort)}</p></li>
          <li><img src={emp} alt="emp"></img><p>EMP - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)}</p></li>
          <li><img src={tornado} alt="tornado"></img><p>Tornado - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyQuas)}</p></li>
          <li><img src={alacrity} alt="alacrity"></img><p>Alacrity - {String.fromCharCode(keyWex)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)}</p></li>
          <li><img src={sun_strike} alt="sun_strike"></img><p>Sun Strike - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)}</p></li>
          <li><img src={forge_spirit} alt="forge_spirit"></img><p>Forge Spirit - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyQuas)}</p></li>
          <li><img src={chaos_meteor} alt="chaos_meteor"></img><p>Chaos Meteor - {String.fromCharCode(keyExort)} {String.fromCharCode(keyExort)} {String.fromCharCode(keyWex)}</p></li>
          <li><img src={deafening_blast} alt="deafening_blast"></img><p>Deafening Blast - {String.fromCharCode(keyQuas)} {String.fromCharCode(keyWex)} {String.fromCharCode(keyExort)}</p></li>
        </ul>
      </div>
    </div>

  );
}

export default App;