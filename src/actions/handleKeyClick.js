
export const handleKeyClick = (setGameState,  keyQuas, keyWex, keyExort, keyInvoke, gameState, record, setRecord, setResultGame, setRandomSpell, spell1, spell2, setSpell1, setSpell2, firstCircle, secondCircle, setThirdCircle, update, setUpdate) => {
    let a, b, c, prevB, prevC, spell, generatedSpell;
    let prevSpell = '';
    const arr  = ["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"];
    let rndIndex = Math.floor(Math.random() * arr.length);
    generatedSpell = arr[rndIndex];
    setRandomSpell(generatedSpell);
    const startTimer = () => {
        let value = 0, prevValue;
          const timerI = setInterval(function(){
            value = value + 1/60;
          if(update > 9){
            setResultGame(value.toFixed(2));
            if(value < prevValue){
                localStorage.setItem('record', value);
            }
            prevValue = value;
            clearInterval(timerI);
          }
          }, 1000/60);
    }
    startTimer();
    const startGame = (event) => {
        if(event.keyCode === 13){
            setGameState('Waiting');
                setSpell1('nospell');
                setSpell2('nospell');
                firstCircle('');
                secondCircle('');
                setThirdCircle('');
                setUpdate(0);
                document.removeEventListener('keydown', startGame);
        }
        if(event.keyCode === keyQuas || event.keyCode === keyWex || event.keyCode === keyExort){
            setThirdCircle(event.keyCode);   
            c = event.keyCode;
            b = prevC;
            secondCircle(b);
            prevC = c;
            a = prevB;
            firstCircle(a);
            prevB = b;
            spell = `${a}${b}${c}`;
        }
        if(event.keyCode === keyInvoke){
            if(spell === `${keyQuas}${keyQuas}${keyQuas}`){
                setSpell1('cold snap');
                spell = 'cold snap';
                if(prevSpell !== 'cold snap'){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'cold snap';
            }
            if(spell === `${keyQuas}${keyQuas}${keyExort}` || spell === `${keyQuas}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyQuas}`){
                setSpell1('ice wall');
                spell = 'ice wall';
                if('ice wall' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'ice wall';
            }
            if(spell === `${keyQuas}${keyQuas}${keyWex}` || spell === `${keyQuas}${keyWex}${keyQuas}` || spell === `${keyWex}${keyQuas}${keyQuas}`){
                setSpell1('ghost walk');
                spell = 'ghost walk';
                if('ghost walk' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'ghost walk';
            }
            if(spell === `${keyWex}${keyWex}${keyWex}`){
                setSpell1('emp');
                spell = 'emp';
                if('emp' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'emp';
            }
            if(spell === `${keyWex}${keyWex}${keyQuas}` || spell === `${keyWex}${keyQuas}${keyWex}` || spell === `${keyWex}${keyQuas}${keyQuas}`){
                setSpell1('tornado');
                spell = 'tornado';
                if('tornado' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'tornado';
            }
            if((spell === `${keyWex}${keyWex}${keyExort}` || spell === `${keyWex}${keyExort}${keyWex}` || spell === `${keyExort}${keyQuas}${keyQuas}`)){
                setSpell1('alacrity');
                spell = 'alacrity';
                if('alacrity' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'alacrity';
            }
            if(spell === `${keyExort}${keyExort}${keyExort}`){
                setSpell1('sun strike');
                spell = 'sun strike';
                if('sun strike' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'sun strike';
            }
            if((spell === `${keyExort}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyExort}` || spell === `${keyQuas}${keyExort}${keyExort}`)){
                setSpell1('forge spirit');
                spell = 'forge spirit';
                if('forge spirit' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'forge spirit';
            }
            if((spell === `${keyExort}${keyExort}${keyWex}` || spell === `${keyExort}${keyWex}${keyExort}` || spell === `${keyWex}${keyExort}${keyExort}`)){
                setSpell1('chaos meteor');
                spell = 'chaos meteor';
                if('chaos meteor' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'chaos meteor';
            }
            if((spell === `${keyQuas}${keyWex}${keyExort}` || spell === `${keyQuas}${keyExort}${keyWex}` || spell === `${keyWex}${keyQuas}${keyExort}` || spell === `${keyWex}${keyExort}${keyQuas}` || spell === `${keyExort}${keyQuas}${keyWex}` || spell === `${keyExort}${keyWex}${keyQuas}`)){
                setSpell1('deafening blast');
                spell = 'deafening blast';
                if('deafening blast' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'deafening blast';
            }
            if(spell === generatedSpell){
                arr.splice(rndIndex, 1);
                rndIndex = Math.floor(Math.random() * arr.length);
                generatedSpell = arr[rndIndex];
                setRandomSpell(generatedSpell);
                setUpdate(update++);
                console.log(rndIndex);
            }
            if(update > 9){
                setGameState('Finished');
                setSpell1('nospell');
                setSpell2('nospell');
                firstCircle('');
                secondCircle('');
                setThirdCircle('');
                setUpdate(0);
                document.removeEventListener('keydown', startGame);
            }
        }
    };
        
    document.addEventListener('keydown', startGame);
}



