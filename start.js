const page = document.querySelector('#startPage');
const startButt = document.querySelector('#startGame');
const clicksButt = document.querySelector('.numClicks');
// let clicksNum = clicksButt.value;
let clicksNum = 3

// window.onload = () => {
//     let clicksNum = 3;
//     clicksButt.addEventListener('change', () => {
//         clicksNum = clicksButt.value;
//         window.localStorage.setItem('clicks', clicksNum);
//     })
    
//     startButt.addEventListener('click', () => {
//         window.location.replace('game.html');
//     })
// }

clicksButt.addEventListener('change', () => {
    clicksNum = clicksButt.value;
    window.localStorage.setItem('clicks', clicksNum);
})

startButt.addEventListener('click', () => {
    window.location.replace('game.html');
})




