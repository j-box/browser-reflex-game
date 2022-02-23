const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const piecePrev = document.querySelector('.previewPiece');
const clicksButt = document.querySelector('.numClicks');
const sizeSlide = document.querySelector('.pieceSize');
let clicksNum = 1;
let piecePixels = 57;

const winHeight = window.screen.height;
const winWidth = window.screen.width;
const prevHeight = piecePrev.offsetHeight;
const prevWidth = piecePrev.offsetWidth;

piecePrev.style.top = Math.abs(((Math.random() * winHeight) - prevHeight)) + 'px';
piecePrev.style.left = Math.abs(((Math.random() * winWidth) - prevWidth)) + 'px';

function randomPiece() {
    piecePrev.style.top = Math.abs(((Math.random() * winHeight) - prevHeight)) + 'px';
    piecePrev.style.left = Math.abs(((Math.random() * winWidth) - prevWidth)) + 'px';
}

setInterval(randomPiece, 2000);

clicksButt.addEventListener('change', () => {
    clicksNum = clicksButt.value;
    window.localStorage.setItem('clicks', clicksNum);
})

sizeSlide.addEventListener('input', () => {
    piecePixels = sizeSlide.value;
    window.localStorage.setItem('pixels', piecePixels)
    piecePrev.style.height = piecePixels + 'px';
    piecePrev.style.width = piecePixels + 'px';
})

startButt.addEventListener('click', () => {
    if (clicksNum < 1) {
        alert('enter positive number')
    } else {
        window.location.replace('game.html');
    }

})




