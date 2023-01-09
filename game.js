const board = document.querySelector('#gameBoard');
const piece = document.querySelector('.gamePiece');
const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const pieceSize = parseInt(window.localStorage.getItem('pixels'));
const winHeight = window.screen.height;
const winWidth = window.screen.width;

//setting variables connexted to html. setting variables connected to size of piece and size of screen

piece.style.height = pieceSize + 'px';
piece.style.width = pieceSize + 'px';
const pieHeight = piece.offsetHeight;
const pieWidth = piece.offsetWidth;

//setting height/width of piece on game screen. 

let seconds = 0;
let tens = 0;
function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    tens = 0;
  }

}

//setting function to be used in setInterval

let gameLength = parseInt(window.localStorage.getItem('clicks'));
let counter = 0;

//set length of game that user chose and set counter for 

let interval = setInterval(startTimer, 10);

//most timers go by 10s of miliseconds. 18.14 secs means 18 seconds and 140 miliseconds


piece.style.top = Math.abs(((Math.random() * winHeight) - pieHeight)) + 'px';
piece.style.left = Math.abs(((Math.random() * winWidth) - pieWidth)) + 'px';

//set the random position of first piece

piece.addEventListener('click', () => {
  counter++;
  if(counter < gameLength){
    const vert = Math.abs(((Math.random() * winHeight) - pieHeight));
    const hor = Math.abs(((Math.random() * winWidth) - pieWidth));
    piece.style.top = vert + 'px';
    piece.style.left = hor + 'px';
  }

  // generating new coordinates for the piece when user clicks piece, and adding to game count

  if (counter === gameLength) {
    counter = 0;
    clearInterval(interval);
    const finishPrompt = `clicked ${gameLength} times in ${seconds}.${tens <= 9 ? '0' + tens : tens} seconds`;
    window.localStorage.setItem('finish', finishPrompt);
    window.localStorage.setItem('clicks', '1');
    window.localStorage.setItem('pixels', '57px');
    window.location.replace('finish.html');
  }
  //when the game is finished, reset everything back to how it is on start page. direct to page displaying time
})

