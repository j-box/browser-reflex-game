const board = document.querySelector('#gameBoard');
const piece = document.querySelector('.gamePiece');
const pieHeight = piece.offsetHeight;
const pieWidth = piece.offsetWidth;
const winHeight = window.screen.height;
const winWidth = window.screen.width;

let seconds = 0;
let tens = 0;

function startTimer () {
    tens++;
    
    if (tens > 99) {
      seconds++;
      tens = 0;
    }
  
  }

let interval = setInterval(startTimer, 10);

let gameLength = 12;
let counter = 0;

piece.style.top = Math.abs(((Math.random() * winHeight) - pieHeight)).toString() + 'px';
piece.style.left = Math.abs(((Math.random() * winWidth) - pieWidth)).toString() + 'px';

piece.addEventListener('click', () => {
    const vert = Math.abs(((Math.random() * winHeight) - pieHeight)).toString();
    const hor = Math.abs(((Math.random() * winWidth) - pieWidth)).toString();
    if (piece.click) {
        piece.style.top = vert + 'px';
        piece.style.left = hor + 'px';
        counter++;
        if (counter === gameLength) {
            alert(`clicked ${gameLength} times in ${seconds}.${tens<=9?'0'+tens:tens} seconds`);
            counter = 0;
            window.location.replace('start.html');
            clearInterval(interval);
        }
    }
})

