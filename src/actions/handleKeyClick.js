

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
            setResultGame(value.toFixed(2));
            clearInterval(timerI);
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
        }
        if(event.key === 'r' || event.key === 'R' || event.key === 'к' || event.key === 'К'){
            if(spell === 'qqq' || spell === 'ййй'){
                setSpell1('cold snap');
                spell = 'cold snap';
                if(prevSpell !== 'cold snap'){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'cold snap';
            }
            if((spell === 'qqe' || spell === 'eqq' || spell === 'qeq' || spell === 'ййу' || spell === 'уйй' || spell === 'йуй')){
                setSpell1('ice wall');
                spell = 'ice wall';
                if('ice wall' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'ice wall';
            }
            if((spell === 'qqw' || spell === 'wqq' || spell === 'qwq' || spell === 'ййц' || spell === 'цйй' || spell === 'йцй')){
                setSpell1('ghost walk');
                spell = 'ghost walk';
                if('ghost walk' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'ghost walk';
            }
            if(spell === 'www' || spell === 'ццц'){
                setSpell1('emp');
                spell = 'emp';
                if('emp' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'emp';
            }
            if((spell === 'wwq' || spell === 'qww' || spell === 'wqw' || spell === 'ццй' || spell === 'йцц' || spell === 'цйц')){
                setSpell1('tornado');
                spell = 'tornado';
                if('tornado' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'tornado';
            }
            if((spell === 'wwe' || spell === 'eww' || spell === 'wew' || spell === 'ццу' || spell === 'уцц' || spell === 'цуц')){
                setSpell1('alacrity');
                spell = 'alacrity';
                if('alacrity' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'alacrity';
            }
            if(spell === 'eee' || spell === 'ууу'){
                setSpell1('sun strike');
                spell = 'sun strike';
                if('sun strike' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'sun strike';
            }
            if((spell === 'eeq' || spell === 'qee' || spell === 'eqe' || spell === 'ууй' || spell === 'йуу' || spell === 'уйу')){
                setSpell1('forge spirit');
                spell = 'forge spirit';
                if('forge spirit' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'forge spirit';
            }
            if((spell === 'eew' || spell === 'wee' || spell === 'ewe' || spell === 'ууц' || spell === 'цуу' || spell === 'уцу')){
                setSpell1('chaos meteor');
                spell = 'chaos meteor';
                if('chaos meteor' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'chaos meteor';
            }
            if((spell === 'qwe' || spell === 'qew' || spell === 'wqe' || spell === 'weq' ||spell === 'eqw' || spell === 'ewq' || spell === 'йцу' || spell === 'йуц' || spell === 'цйу' || spell === 'цуй' ||spell === 'уйц' || spell === 'уцй')){
                setSpell1('deafening blast');
                spell = 'deafening blast';
                if('deafening blast' !== prevSpell){
                    setSpell2(prevSpell);  
                }
                prevSpell = 'deafening blast';
            }
            if(spell === generatedSpell){
                generatedSpell = arr[Math.floor(Math.random() * arr.length)];
                setRandomSpell(generatedSpell);
                setUpdate(update++);
            }
            if(update > 9){
                setGameState('Finished');
            }
        }});
}

