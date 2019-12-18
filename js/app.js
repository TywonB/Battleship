// You should add the tiles of gameboard to the dom
// The AI must select a random tile on the gameboard
// You will select tiles and the game will indicate a HIT or a miss
// On HIT the game is over
// Add a button to start a new game

var gameboard = document.getElementById('gameboard');
var gameboardSize = [
    {position: 0},
    {position: 1},
    {position: 2},
    {position: 3},
    {position: 4},
    {position: 5},
    {position: 6},
    {position: 7},
    {position: 8},
    {position: 9},
    {position: 10},
    {position: 11},
    {position: 12},
    {position: 13},
    {position: 14},
    {position: 15},
    {position: 16},
    {position: 17},
    {position: 18},
    {position: 19},
    {position: 20},
    {position: 21},
    {position: 22},
    {position: 23},
    {position: 24},
    {position: 25},
    {position: 26},
    {position: 27},
    {position: 28},
    {position: 29},
    {position: 30},
    {position: 31},
    {position: 32},
    {position: 33},
    {position: 34},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35},
    {position: 35}
];
var hit = false;
var won = document.getElementById('win');

for (let i = 0; i < gameboardSize.length; i++) {
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute('data-id', i);
    gameboard.appendChild(tile);
    tile.addEventListener('click', function () {
        check(this);
    });
}

function newGame() {
    let reset = document.getElementById('reset');
    reset.addEventListener('click', newGame());
    document.getElementById('game').reset()
}

var AI = gameboardSize[Math.floor(Math.random() * Math.floor(gameboardSize.length))];
console.log(AI);

function check(tile) {
    let tileID = tile.getAttribute('data-id')
    if (!hit) {
        if (tileID == AI.position) {
            won.innerText = 'You Win!!!'
            tile.style.backgroundColor = 'green';
            hit = true;
        } else {
            won.innerText = 'Miss!';
            tile.style.backgroundColor = 'red';
        }
    }
    return false;
}

// function (newGameBoard) {
//     let playerVsplayer = document.getElementById('pVP');
//     if (playerVsplayer == 'click') {
        
//     }
// }