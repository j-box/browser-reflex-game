const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const piecePrev = document.querySelector('.previewPiece');
const clicksButt = document.querySelector('.numClicks');
const sizeSlide = document.querySelector('.pieceSize');
let clicksNum = 1;
let piecePixels = 57;

//setting variables connected to html. setting default game variables

const winHeight = window.screen.height;
const winWidth = window.screen.width;
const prevHeight = piecePrev.offsetHeight;
const prevWidth = piecePrev.offsetWidth;

//getting info about piece size and window size into variables

piecePrev.style.top = Math.abs(((Math.random() * winHeight) - prevHeight)) + 'px';
piecePrev.style.left = Math.abs(((Math.random() * winWidth) - prevWidth)) + 'px';

//setting random coordinates of preview piece

function randomPiece() {
    piecePrev.style.top = Math.abs(((Math.random() * winHeight) - prevHeight)) + 'px';
    piecePrev.style.left = Math.abs(((Math.random() * winWidth) - prevWidth)) + 'px';
}

//function generating random coordinates

setInterval(randomPiece, 2000);

//setInterval to make preview piece change position randomly

clicksButt.addEventListener('change', () => {
    clicksNum = clicksButt.value;
    window.localStorage.setItem('clicks', clicksNum);
})

//get value that will be the length of the game

sizeSlide.addEventListener('input', () => {
    piecePixels = sizeSlide.value;
    window.localStorage.setItem('pixels', piecePixels)
    piecePrev.style.height = piecePixels + 'px';
    piecePrev.style.width = piecePixels + 'px';
})

//get value that will be size of the game piece, and change the size of preview piece

startButt.addEventListener('click', () => {
    if (clicksNum < 1) {
        alert('enter positive number')
    } else {
        window.location.replace('game.html');
    }

})

//check for valid game length, and direct to game page upon button click


