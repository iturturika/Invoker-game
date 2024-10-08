import React from 'react'
import './StartedGame.scss';

import quas from '../../img/invoker_quas.png';
import wex from '../../img/invoker_wex.png';
import exort from '../../img/invoker_exort.png';
import invoke from '../../img/invoker_invoke.png';
import nospell from '../../img/no_spell.png';

import cold_snap from '../../img/invoker_cold_snap.png';
import ghost_walk from '../../img/invoker_ghost_walk.png';
import ice_wall from '../../img/invoker_ice_wall.png';
import emp from '../../img/invoker_emp.png';
import tornado from '../../img/invoker_tornado.png';
import alacrity from '../../img/invoker_alacrity.png';
import sun_strike from '../../img/invoker_sun_strike.png';
import forge_spirit from '../../img/invoker_forge_spirit.png';
import chaos_meteor from '../../img/invoker_chaos_meteor.png';
import deafening_blast from '../../img/invoker_deafening_blast.png';


const StartedGame = (props) => {
  return (
     <div className='mainSection'>
        <h1 style={{fontSize: '60px', marginTop: '70px', marginBottom: '70px'}}>{props.valueTimer}</h1>
        <div className='curent__spell'>
          {props.randomSpell === 'cold snap' ? <><img src={cold_snap} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'ghost walk' ? <><img src={ghost_walk} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'ice wall' ? <><img src={ice_wall} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'emp' ? <><img src={emp} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'tornado' ? <><img src={tornado} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'alacrity' ? <><img src={alacrity} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'sun strike' ? <><img src={sun_strike} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'forge spirit' ? <><img src={forge_spirit} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'chaos meteor' ? <><img src={chaos_meteor} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
          {props.randomSpell === 'deafening blast' ? <><img src={deafening_blast} alt="randomSpell"></img><p>{props.randomSpell}</p></> : null}
        </div>
        <button className='restart' onClick={props.endGame}>Restart</button>
        <ul className='window'>
          <li className='circle'>
            {props.firstCircle === props.keyQuas ? <img src={quas} alt="quas"></img> : undefined}
            {props.firstCircle === props.keyWex ? <img src={wex} alt="wex"></img> : null}
            {props.firstCircle === props.keyExort ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.secondCircle === props.keyQuas ? <img src={quas} alt="quas"></img> : undefined}
            {props.secondCircle === props.keyWex ? <img src={wex} alt="wex"></img> : null}
            {props.secondCircle === props.keyExort ? <img src={exort} alt="exort"></img> : null}
          </li>
          <li className='circle'>
            {props.thirdCircle === props.keyQuas ? <img src={quas} alt="quas"></img> : undefined}
            {props.thirdCircle === props.keyWex ? <img src={wex} alt="wex"></img> : null}
            {props.thirdCircle === props.keyExort ? <img src={exort} alt="exort"></img> : null}
          </li>
        </ul>
        <ul className='spells__group'>
          <li className='square'><img src={quas} alt="quas"></img><span>{String.fromCharCode(props.keyQuas)}</span></li>
          <li className='square'><img src={wex} alt="wex"></img><span>{String.fromCharCode(props.keyWex)}</span></li>
          <li className='square'><img src={exort} alt="exort"></img><span>{String.fromCharCode(props.keyExort)}</span></li>
          <li className='square'>
            {props.spell1 === 'cold snap' ? <img src={cold_snap} alt="spell2"></img> : null}
            {props.spell1 === 'ghost walk' ? <img src={ghost_walk} alt="spell2"></img> : null}
            {props.spell1 === 'ice wall' ? <img src={ice_wall} alt="spell2"></img> : null}
            {props.spell1 === 'emp' ? <img src={emp} alt="spell2"></img> : null}
            {props.spell1 === 'tornado' ? <img src={tornado} alt="spell2"></img> : null}
            {props.spell1 === 'alacrity' ? <img src={alacrity} alt="spell2"></img> : null}
            {props.spell1 === 'sun strike' ? <img src={sun_strike} alt="spell2"></img> : null}
            {props.spell1 === 'forge spirit' ? <img src={forge_spirit} alt="spell2"></img> : null}
            {props.spell1 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
            {props.spell1 === 'deafening blast' ? <img src={deafening_blast} alt="spell2"></img> : null}
            {props.spell1 === 'nospell' ? <img src={nospell} alt="spell2"></img> : null}
          <span>D</span></li>
          <li className='square'>
            {props.spell2 === 'cold snap' ? <img src={cold_snap} alt="spell2"></img> : null}
            {props.spell2 === 'ghost walk' ? <img src={ghost_walk} alt="spell2"></img> : null}
            {props.spell2 === 'ice wall' ? <img src={ice_wall} alt="spell2"></img> : null}
            {props.spell2 === 'emp' ? <img src={emp} alt="spell2"></img> : null}
            {props.spell2 === 'tornado' ? <img src={tornado} alt="spell2"></img> : null}
            {props.spell2 === 'alacrity' ? <img src={alacrity} alt="spell2"></img> : null}
            {props.spell2 === 'sun strike' ? <img src={sun_strike} alt="spell2"></img> : null}
            {props.spell2 === 'forge spirit' ? <img src={forge_spirit} alt="spell2"></img> : null}
            {props.spell2 === 'chaos meteor' ? <img src={chaos_meteor} alt="spell2"></img> : null}
            {props.spell2 === 'deafening blast' ? <img src={deafening_blast} alt="spell2"></img> : null}
            {props.spell2 === 'nospell' || props.spell2 === '' ? <img src={nospell} alt="spell2"></img> : null}
          <span>F</span></li>
          <li className='square'><img src={invoke} alt="invoke"></img><span>{String.fromCharCode(props.keyInvoke)}</span></li>
        </ul>
      </div>


  )
}

export default StartedGame
