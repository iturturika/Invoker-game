export const restartGame = (setGameState, anonymFunction) => {
    setGameState("Waiting");
    window.location.replace("https://iturturika.github.io/Invoker-game/");
}