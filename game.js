const board = document.querySelector('#gameBoard');
const piece = document.querySelector('.gamePiece');
// const startButton = document.querySelector('#startGame');
const pieHeight = piece.offsetHeight;
const pieWidth = piece.offsetWidth;

const winHeight = window.screen.height;
const winWidth = window.screen.width;

let gameLength = 3;
let counter = 0;

piece.style.top = Math.abs(((Math.random() * winHeight) - pieHeight)).toString() + 'px';
piece.style.left = Math.abs(((Math.random() * winWidth) - pieWidth)).toString() + 'px';


piece.addEventListener('click', () => {
    if (piece.click) {
        counter++;
        if (counter === gameLength) {
            alert(`clicked ${gameLength} times`);
            counter = 0;
            window.location.replace('start.html');
        }
    }
})

piece.addEventListener('click', () => {
    const vert = Math.abs(((Math.random() * winHeight) - pieHeight)).toString();
    const hor = Math.abs(((Math.random() * winWidth) - pieWidth)).toString();
    if (piece.click) {
        piece.style.top = vert + 'px';
        piece.style.left = hor + 'px';
    }
})

console.log(window.screen.width);
console.log(piece.offsetHeight);
console.log(piece.offsetWidth);