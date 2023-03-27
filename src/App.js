import React from 'react';
import PreviusGameState from './pages/PreviusGameState/PreviusGameState.js';
import StartedGame from './pages/StartedGame/StartedGame.js';
import FinishedGame from './pages/FinishedGame/FinishedGame.js';
import ReactGA from "react-ga4";
import { Link, Routes, Route } from "react-router-dom";

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
import AdsComponent from './components/AdsComponent.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import SigninPage from './pages/SigninPage/SigninPage.js';
import RecordsPage from './pages/RecordsPage/RecordsPage.js';
import AproveReg from './pages/AproveReg.js';
import axios from 'axios';
import jwt_decode from "jwt-decode";
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
const [stop, setStop] = React.useState(false);
const updateRef = React.useRef(update);
const stopRef = React.useRef(stop);
React.useEffect(() => {updateRef.current = update}, [update]);
React.useEffect(() => {stopRef.current = stop}, [stop]);
const stopTimer = (timerId) => {
  clearInterval(timerId);
  console.log('cleared');
}

const startTimer = () => {
  let value = 0;
    const timerI = setInterval(function(){
      value = value + 1/60;
      if(updateRef.current > 9){
        setResultGame(value.toFixed(2));
        setGameState("Finished");
        if(value < record && updateRef.current > 9){
            setRecord(value.toFixed(2));
            if(localStorage.getItem('token')){
              const decoded = jwt_decode(localStorage.getItem('token'));
              const id = decoded._id;
              const nickName = decoded.nickName;
              axios.patch(process.env.REACT_APP_BE_URI+'/users-records',{
                "id": id,
                "nickName": nickName,
                "record": value
              },
              {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('token')
                }
              })
              .then((res) => {return res})
              .catch((err) => {return err})
            }
        }
        stopTimer(timerI);
      };
      if(stopRef.current){
        stopTimer(timerI);
        console.log('Stopped');
      }
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
  setStop(false);
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
  setStop(true);
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
  <Routes>
    <Route path='/' element={
    <div className="App">
      <header className='header'>
        {
          localStorage.getItem('token') ? 
          <div className='buttons_auth'><button onClick={() => {localStorage.removeItem("token"); window.location.replace("/")}}>Exit</button>            <Link to={"/records"}><button>records</button></Link></div>
          
          : 
          <div className='buttons_auth'>
            <Link to={"/login"}><button>log in</button></Link>
            <Link to={"/signin"}><button>sign in</button></Link>
            <Link to={"/records"}><button>records</button></Link>
          </div>
        }
      </header>
      <div className="firstBlock">
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
      <div className='guide-block'>
      <div className='ad'><AdsComponent dataAdSlot={8938200875} /></div>
        <div className='guide-block__info'>
          <h2>Guide</h2>
          <h3>Introduction</h3>
          <p>Invoker is a challenging hero to learn and requires significant practice to master due to his flexibility and power. He is typically played in the mid lane to quickly gain levels and gold. To be effective, it's important to focus on leveling two orbs and getting a value point in the third, rather than trying to level all three equally. This specialization allows Invoker to excel in specific areas where his team may need him the most. However, it's also important for Invoker to contribute to team fights before reaching his full potential at level 25. With the right approach and strategy, Invoker can be a formidable force in the game.</p>
          <div className='guide-block__pros-and-cons'>
            <div className='guide-block__pros'>
            <h4 style={{color: "green"}}>Pros</h4>
            <ul>
              <li>Extremely versatile.</li>
              <li>Deadly magic combos.</li>
              <li>Can push quite well.</li>
              <li>Good solo killing ability with Quas-Exort.</li>
            </ul>
            </div>
            <div className='guide-block__cons'>
            <h4 style={{color: "red"}}>Cons</h4>
            <ul>
              <li>Steep learning curve.</li>
              <li>Requires significant early farm to be effective.</li>
              <li>Not very good at farming compared to other cores.</li>
              <li>Vulnerable to silence.</li>
            </ul>
            </div>
          </div>
          <h3>Builds</h3>
          <p>You can find current builds on sites such as:</p>
          <a href='https://www.dotabuff.com/heroes/invoker/guides'>Dotabuff</a>
          <a href='https://stratz.com/heroes/74'>Stratz</a>
          <h3>Advice</h3>
          <p>To improve the macro and micro game on the Invoker, I recommend watching the games of professionals or streamers.</p>
          <h3>Tricks</h3>
          <p>1. The most important trick on the Invoker is to cast spells without pressing 3 spheres. In the Tornado Emp Meteor Blast combo, I painted the buttons that need to be pressed. There, the blast was not cast by QWE, but simply by Q. And so, let's look at where such tricks can be used.
            Let's say you don't have an aganim, a refresher. You maxed Exort and are going to cast Tornado Meteor Blast as usual. Personally, I like to put QWE spheres in front of the cast in order to immediately press F + D + R + D. But you need it more in a caste with an aganim. To cast a spell faster and save extra ~0.2-0.5 sec, you can use such blanks + use what I described above. What it should look like: you have Emp and Tornado in your pool. You place EEW spheres. Therefore, to further cast the blast, you only need to press Q. Hence: F + R + F + D + Q + R + D. Or is there another way to cast the same combo without harvesting spheres. Let's say you have WWW spheres to increase the ms and cast EMP later. In the pool you have Meteor and Tornado. To cast a blast, we only need to press QE. Hence: F+R+D+QE+F+R+D. It will be the same Tornado Emp Meteor Blast, but cast in a different way.
            There are many such tricks, such as Tornado after Emp +Q, Ghost walk after ColdSnap +W, etc.
          </p>
          <p>2. A kind of continuation of 1 trick, though this is completely for nerds, well, for example, I use it. The thing is that skills can be cast in any order, like blast not QWE but WQE EWQ and so on. Based on this, we can make a different spell order, add 1 sphere to get the spell we need. For example WQQ - Ghost walk, + Q/E = Snap/IceWall. Useful if you Q+W, go into invisibility from a gank, and see that you can kill someone on the turn. And in order not to spend ~0.5 sec on recasting, not giving the enemy time to react, just E+R+D=IW and finish it off :3 will.</p>
          <p>3. The main trick of the Q+W invoker is ganks in invisibility. But there is a little trick that allows you to make TPOUT in invisibility. To do this, you need to make a teleport and then press the invis.</p>
          </div>
          <div className='ad'><AdsComponent dataAdSlot={8877178049} /></div>
      </div>
      <div className='secondBlock'>
        <div className='about'>
          <h2>About</h2>
          <p>Invoker is a popular and beloved character in the gaming world, and it's great to see a game that focuses on improving skills with this character. The classic mode of the game, where players must quickly call spells, is a fantastic way to practice and hone your skills. With 10 spells to master, players will need to be quick and accurate in order to achieve the best results.

As the game develops, there will be new modes that will be introduced to further challenge players and test their skills. It's always exciting to see new game modes being added, and it will be interesting to see what other challenges are in store for players.

Registering on the website is also a great idea for those who are serious about playing and want to compete with others. It's important to provide accurate information when registering, as this will ensure that you have access to all of the features of the site. Once registered, players can check out the leaderboard and see how they stack up against others. It's always fun to compete with others, and the leaderboard is a great way to keep track of your progress.

Overall, this game is a fantastic way to improve your skills with Invoker and to challenge yourself to become the best player you can be. With new modes being added and the opportunity to compete with others, it's a great time to get involved and see how you measure up. So, what are you waiting for? Start practicing and become a master of Invoker!</p>
          <h2>Socials</h2>
          <div className='socials'>
            <a href="https://twitter.com/iturturika"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="twitter" width='60px' height="60px"></img></a>
            <a href="https://www.reddit.com/r/InvokerGame?utm_medium=android_app&utm_source=share"><img src="https://www.iconpacks.net/icons/2/free-reddit-logo-icon-2436-thumb.png" alt="reddit" width='70px' height="70px"></img></a>
            <a href="https://vm.tiktok.com/ZMY5Kakc6/"><img src="https://cliply.co/wp-content/uploads/2021/02/372102780_TIKTOK_ICON_1080.png" alt="tiktok" width='90px' height="90px"></img></a>
            <a href="https://t.me/invokergame"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/480px-Telegram_logo.svg.png" alt="tg" width='65px' height="65px"></img></a>
          </div>
        </div>  
      </div>
    </div>
    }></Route>
    <Route exact path='/login' element={<LoginPage/>}></Route>
    <Route exact path='/signin'element={<SigninPage/>}></Route>
    <Route exact path='/aprove-registration'element={<AproveReg/>}></Route>
    <Route exact path='/records'element={<RecordsPage/>}></Route>
</Routes>

  );
}

export default App;