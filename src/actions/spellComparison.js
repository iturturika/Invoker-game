
export const spellComparison = (spell1, generatedSpell, setRandomSpell, update, setUpdate) => {
    if(spell1 === generatedSpell){
        const arr  = ["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"];
        const randomIndex = Math.floor(Math.random() * arr.length);
        setRandomSpell(arr[randomIndex]);
        setUpdate(update++);
    }
}