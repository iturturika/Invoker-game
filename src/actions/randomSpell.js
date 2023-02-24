import cold_snap from '../img/invoker_cold_snap.png';
import ghost_walk from '../img/invoker_ghost_walk.png';
import ice_wall from '../img/invoker_ice_wall.png';
import emp from '../img/invoker_emp.png';
import tornado from '../img/invoker_tornado.png';
import alacrity from '../img/invoker_alacrity.png';
import sun_strike from '../img/invoker_sun_strike.png';
import forge_spirit from '../img/invoker_forge_spirit.png';
import chaos_meteor from '../img/invoker_chaos_meteor.png';
import deafening_blast from '../img/invoker_deafening_blast.png';

const arr  = [cold_snap, ghost_walk, ice_wall, emp, tornado, alacrity, sun_strike, forge_spirit, chaos_meteor, deafening_blast];
export const randomSpell = (setRandomSpell) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setRandomSpell(arr[randomIndex]);
}