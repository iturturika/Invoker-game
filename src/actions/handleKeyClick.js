

export const handleKeyClick = (setGameState, setResultGame, setRandomSpell, spell1, spell2, setSpell1, setSpell2, firstCircle, secondCircle, setThirdCircle, update, setUpdate) => {
    let a, b, c, prevB, prevC, spell, generatedSpell;
    let prevSpell = '';
    const arr  = ["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"];
    generatedSpell = arr[Math.floor(Math.random() * arr.length)];
    setRandomSpell(generatedSpell);
    const startTimer = () => {
        let value = 0;
          const timerI = setInterval(function(){
            value = value + 1/60;
          if(update > 9){
            clearInterval(timerI);
            setResultGame(value.toFixed(2));
          }
          }, 1000/60);
    }
        
    startTimer();

    document.addEventListener('keydown', function (event) {
        if(event.key === 'q' || event.key === 'Q' || event.key === 'w' || event.key === 'W' || event.key === 'e' || event.key === 'E' || event.key === 'й' || event.key === 'Й' || event.key === 'ц' || event.key === 'Ц' || event.key === 'у' || event.key === 'У'){
            setThirdCircle(event.key);   
            c = event.key;
            b = prevC;
            secondCircle(b);
            prevC = c;
            a = prevB;
            firstCircle(a);
            prevB = b;
            spell = a + b + c;
        } else if(event.key === 'r' || event.key === 'R' || event.key === 'к' || event.key === 'К'){
            if(spell === 'qqq' && 'cold snap' !== prevSpell){
                setSpell1('cold snap');
                spell = 'cold snap';
                setSpell2(prevSpell);
                prevSpell = 'cold snap';
            }
            if((spell === 'qqe' || spell === 'eqq' || spell === 'qeq') && 'ice wall' !== prevSpell){
                setSpell1('ice wall');
                spell = 'ice wall';
                setSpell2(prevSpell);
                prevSpell = 'ice wall';
            }
            if((spell === 'qqw' || spell === 'wqq' || spell === 'qwq') && 'ghost walk' !== prevSpell){
                setSpell1('ghost walk');
                spell = 'ghost walk';
                setSpell2(prevSpell);
                prevSpell = 'ghost walk';
            }
            if(spell === 'www' && 'emp' !== prevSpell){
                setSpell1('emp');
                spell = 'emp';
                setSpell2(prevSpell);
                prevSpell = 'emp';
            }
            if((spell === 'wwq' || spell === 'qww' || spell === 'wqw') && 'tornado' !== prevSpell){
                setSpell1('tornado');
                spell = 'tornado';
                setSpell2(prevSpell);
                prevSpell = 'tornado';
            }
            if((spell === 'wwe' || spell === 'eww' || spell === 'wew')  && 'alacrity' !== prevSpell){
                setSpell1('alacrity');
                spell = 'alacrity';
                setSpell2(prevSpell);
                prevSpell = 'alacrity';
            }
            if(spell === 'eee' && 'sun strike' !== prevSpell){
                setSpell1('sun strike');
                spell = 'sun strike';
                setSpell2(prevSpell);
                prevSpell = 'sun strike';
            }
            if((spell === 'eeq' || spell === 'qee' || spell === 'eqe') && 'forge spirit' !== prevSpell){
                setSpell1('forge spirit');
                spell = 'forge spirit';
                setSpell2(prevSpell);
                prevSpell = 'forge spirit';
            }
            if((spell === 'eew' || spell === 'wee' || spell === 'ewe') && 'chaos meteor' !== prevSpell){
                setSpell1('chaos meteor');
                spell = 'chaos meteor';
                setSpell2(prevSpell);
                prevSpell = 'chaos meteor';
            }
            if((spell === 'qwe' || spell === 'qew' || spell === 'wqe' || spell === 'weq' ||spell === 'eqw' || spell === 'ewq') && 'deafening blast' !== prevSpell){
                setSpell1('deafening blast');
                spell = 'deafening blast';
                setSpell2(prevSpell);
                prevSpell = 'deafening blast';
            }
            if(update > 8){
                setGameState('Finished');
            }
            if(spell === generatedSpell){
                generatedSpell = arr[Math.floor(Math.random() * arr.length)];
                setRandomSpell(generatedSpell);
                setUpdate(update++);
            }
        }});
}

