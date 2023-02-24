export const startGame = (setGameState) => {
    const button = document.querySelector('.button');
    button.classList.add('button_onClick');
    setGameState("Started");
}