document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

function initializeGame() {
    const shipCount = 4;
    const totalBoxes = 16;
    const images = [];
    for (let i = 0; i < shipCount; i++) {
        images.push('battleship.png');
    }
    for (let i = shipCount; i < totalBoxes; i++) {
        images.push('water.png');
    }
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }
    let counter = 0;
    let currShips = 0;
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.getElementById(`box${i}`);
        box.innerHTML = '';
        const img = document.createElement('img');
        img.src = images[i];
        img.style.display = 'none';
        img.classList.add('game-image');
        box.appendChild(img);
        box.addEventListener('click', (event) => {
            if (img.style.display === 'block') {
                return;
            }
            img.style.display = 'block';
            counter++;
            if(img.src.includes("battleship.png")){
                currShips++;
            }
            if(currShips === 5){
                alert("You Won!!!");
                counter = 0;
                currShips = 0;
                resetGame();
                return;
            }
            else if(counter === 8){
                alert("You Lost!!!");
                counter = 0;
                currShips = 0;
                resetGame();
                return;
            }
        });
    }
}

function resetGame() {
    const boxes = document.querySelectorAll('.game-img');
    boxes.forEach(img => img.style.display = 'none');
    initializeGame();
}
