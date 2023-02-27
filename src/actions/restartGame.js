export const restartGame = (setGameState, anonymFunction) => {
    setGameState("Waiting");
    window.location.replace("https://invoker-game.com");
}