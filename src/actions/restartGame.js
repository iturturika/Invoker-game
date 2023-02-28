export const restartGame = (setGameState) => {
    setGameState("Waiting");
    window.location.replace("https://invoker-game.com");
}