
const arr  = ["cold snap", "ghost walk", "ice wall", "emp", "tornado", "alacrity", "sun strike", "forge spirit", "chaos meteor", "deafening blast"];
export const randomSpell = (setRandomSpell) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    setRandomSpell(arr[randomIndex]);
}