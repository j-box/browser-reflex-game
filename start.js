const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const piecePrev = document.querySelector('.previewPiece');
const clicksButt = document.querySelector('.numClicks');
const sizeSlide = document.querySelector('.pieceSize');
let clicksNum = 1;
let piecePixels = 57;

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
    if( clicksNum < 1){
        alert('enter positive number')
    } else {
        window.location.replace('game.html');
    }
    
})




