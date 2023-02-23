export const restartGame = (setGameState, anonymFunction) => {
    setGameState("Waiting");
    window.location.replace("/");
}