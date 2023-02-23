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
import nospell from '../img/no_spell.png';
export const handleKeyClick = (setSpell1, setSpell2, firstCircle, secondCircle, setThirdCircle, update, setUpdate) => {
    let a, b, c, prevB, prevC, spell;
    let prevSpell = '';
    document.addEventListener('keydown', function (event) {
        if(event.key === 'q' || event.key === 'Q' || event.key === 'w' || event.key === 'W' || event.key === 'e' || event.key === 'E' || event.key === 'й' || event.key === 'Й' || event.key === 'ц' || event.key === 'Ц' || event.key === 'у' || event.key === 'У'){
            setThirdCircle(event.key);   
            setUpdate(update++);
            c = event.key;
            b = prevC;
            secondCircle(b);
            prevC = c;
            a = prevB;
            firstCircle(a);
            prevB = b;
            spell = a + b + c;
        } else if(event.key === 'r' || event.key === 'R' || event.key === 'к' || event.key === 'К'){
            if(spell === 'qqq'){
                setSpell1(cold_snap);
                setSpell2(prevSpell);
                prevSpell = cold_snap;
            }
            if(spell === 'qqe' || spell === 'eqq' || spell === 'qeq'){
                setSpell1(ice_wall);
                setSpell2(prevSpell);
                prevSpell = ice_wall;
            }
            if(spell === 'qqw' || spell === 'wqq' || spell === 'qwq'){
                setSpell1(ghost_walk);
                setSpell2(prevSpell);
                prevSpell = ghost_walk;
            }
            if(spell === 'www'){
                setSpell1(emp);
                setSpell2(prevSpell);
                prevSpell = emp;
            }
            if(spell === 'wwq' || spell === 'qww' || spell === 'wqw'){
                setSpell1(tornado);
                setSpell2(prevSpell);
                prevSpell = tornado;
            }
            if(spell === 'wwe' || spell === 'eww' || spell === 'wew'){
                setSpell1(alacrity);
                setSpell2(prevSpell);
                prevSpell = alacrity;
            }
            if(spell === 'eee'){
                setSpell1(sun_strike);
                setSpell2(prevSpell);
                prevSpell = sun_strike;
            }
            if(spell === 'eeq' || spell === 'qee' || spell === 'eqe'){
                setSpell1(forge_spirit);
                setSpell2(prevSpell);
                prevSpell = forge_spirit;
            }
            if(spell === 'eew' || spell === 'wee' || spell === 'ewe'){
                setSpell1(chaos_meteor);
                setSpell2(prevSpell);
                prevSpell = chaos_meteor;
            }
            if(spell === 'qwe' || spell === 'ewq'){
                setSpell1(deafening_blast);
                setSpell2(prevSpell);
                prevSpell = deafening_blast;
            }
            if(spell === ''){
                setSpell1(nospell);
                setSpell2(prevSpell);
                prevSpell = nospell;
            }
        }});
}

