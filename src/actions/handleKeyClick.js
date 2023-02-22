export const handleKeyClick = (setThirdCircle, update, setUpdate) => {
    document.addEventListener('keydown', function (event) {
        if(event.key === 'q' || event.key === 'Q' || event.key === 'w' || event.key === 'W' || event.key === 'e' || event.key === 'E' || event.key === 'й' || event.key === 'Й' || event.key === 'ц' || event.key === 'Ц' || event.key === 'у' || event.key === 'У'){
            setThirdCircle(event.key);   
            setUpdate(update++);
        } else if(event.key === 'r' || event.key === 'R' || event.key === 'к' || event.key === 'К'){
            console.log(event.key);
        }
    });
}