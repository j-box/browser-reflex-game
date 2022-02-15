const board = document.querySelector('#gameBoard');
const piece = document.querySelector('.gamePiece');
const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const pieHeight = piece.offsetHeight;
const pieWidth = piece.offsetWidth;
const winHeight = window.screen.height;
const winWidth = window.screen.width;

let seconds = 0;
let tens = 0;

function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    tens = 0;
  }

}

// let gameLength = 3;
let gameLength = parseInt(window.localStorage.getItem('clicks'));
let counter = 0;

let interval = setInterval(startTimer, 10);
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
      counter = 0;
      clearInterval(interval);
      alert(`clicked ${gameLength} times in ${seconds}.${tens <= 9 ? '0' + tens : tens} seconds`);
      window.localStorage.setItem('clicks', '3');
      window.location.replace('start.html');
    }
  }
})

