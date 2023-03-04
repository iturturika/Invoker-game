export const restartGame = (setGameState) => {
    setGameState("Waiting");
    window.location.replace("http://localhost:3000");
}