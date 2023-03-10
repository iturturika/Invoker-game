import React from 'react';
import PreviusGameState from './pages/PreviusGameState/PreviusGameState.js';
import StartedGame from './pages/StartedGame/StartedGame.js';
import FinishedGame from './pages/FinishedGame/FinishedGame.js';

import './app.scss';

import quas from './img/invoker_quas.png';
import wex from './img/invoker_wex.png';
import exort from './img/invoker_exort.png';
import invoke from './img/invoker_invoke.png';
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

function App() {
const [gameState, setGameState] = React.useState('Waiting');
  return (
    <div className="App">
      <div className='controlls'>
        <h2>Controlls</h2>
        <ul className='controll__list'>
          <li><img src={quas} alt="quas"></img><p>Q - Quas</p></li>
          <li><img src={wex} alt="wex"></img><p>W - Wex</p></li>
          <li><img src={exort} alt="exort"></img><p>E - Exort</p></li>
          <li><img src={nospell} alt="spell1"></img><p>D - Spell 1 </p></li>
          <li><img src={nospell} alt="spell2"></img><p>F - Spell 2 </p></li>
          <li><img src={invoke} alt="invoke"></img><p>R - Invoke</p></li>
        </ul>
      </div>
      {gameState === 'Waiting' ? <PreviusGameState setGameState={setGameState}/> : null}
      {gameState === 'Started' ? <StartedGame setGameState={setGameState}/> : null}
      {gameState === 'Finished' ? <FinishedGame/> : null}
      <div className='spells'>
        <h2>Spells</h2>
        <ul className='spell__list'>
          <li><img src={cold_snap} alt="cold_snap"></img><p>Cold Snap - Q Q Q</p></li>
          <li><img src={ghost_walk} alt="ghost_walk"></img><p>Ghost Walk - Q Q W</p></li>
          <li><img src={ice_wall} alt="ice_wall"></img><p>Ice Wall - Q Q E</p></li>
          <li><img src={emp} alt="emp"></img><p>EMP - W W W</p></li>
          <li><img src={tornado} alt="tornado"></img><p>Tornado - W W Q</p></li>
          <li><img src={alacrity} alt="alacrity"></img><p>Alacrity - W W E</p></li>
          <li><img src={sun_strike} alt="sun_strike"></img><p>Sun Strike - E E E</p></li>
          <li><img src={forge_spirit} alt="forge_spirit"></img><p>Forge Spirit - E E Q</p></li>
          <li><img src={chaos_meteor} alt="chaos_meteor"></img><p>Chaos Meteor - E E W</p></li>
          <li><img src={deafening_blast} alt="deafening_blast"></img><p>Deafening Blast - Q W E</p></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
