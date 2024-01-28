const player = document.getElementById('character');
const gameContainer = document.getElementById('game-container');

const playerMiddleX = player.clientWidth / 2;
const playerMiddleY = player.clientHeight / 2;

let playerX = gameContainer.clientWidth / 2; // initial X position
let playerY = gameContainer.clientHeight / 2; // initial Y position

movePlayer(0,0);

document.addEventListener('keydown', function (event) {
    // Arrow keys or ZQSD
    switch (event.key) {
        case 'q':
            movePlayer(-10, 0);
            break;
        case 'd':
            movePlayer(10, 0);
            break;
        case 'z':
            movePlayer(0, -10);
            break;
        case 's':
            movePlayer(0, 10);
            break;
    }
});

function movePlayer(deltaX, deltaY) {
    playerX += deltaX;
    playerY += deltaY;

    // Calculate boundaries
    const leftBoundaryX = 0 + playerMiddleX;
    const rightBoundaryX = gameContainer.clientWidth - playerMiddleX;
    const topBoundaryY = 0 + playerMiddleY;
    const bottomBoundaryY = gameContainer.clientHeight - playerMiddleY;

    // Check boundaries
    if (playerX < leftBoundaryX) playerX = leftBoundaryX;
    if (playerX > rightBoundaryX) playerX = rightBoundaryX;
    if (playerY < topBoundaryY) playerY = topBoundaryY;
    if (playerY > bottomBoundaryY) playerY = bottomBoundaryY;

    // Update player position
    player.style.left = playerX + 'px';
    player.style.top = playerY + 'px';
}
