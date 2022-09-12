'use strict';
// document.querySelector('.number').textContent = 25;

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//   // console.log(document.querySelector('.guess').value);
//   let guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess, guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No Number';
//   } else if (guess === secretNumber) {

//     document.querySelector('.message').textContent = 'correct Number';
//     document.querySelector('body').style.backgroundColor = '#68b347';
//     document.querySelector('.number').style.width = '38rem';

//   } else if (guess > secretNumber) {
//     document.querySelector('.message').textContent = 'Too high';

//     } else if(guess < secretNumber){
//         document.querySelector(".message").textContent = 'too low'

//     if(score > 1){
//         document.querySelector('.message').textContent = 'Too high';
//         score--;
//     document.querySelector('.score').textContent = score
//     }else {
//     document.querySelector('.message').textContent =
//     'you lose the game';
//     document.querySelector('.score').textContent =
//     0;
//     }

//   } else if (guess < secretNumber) {
//     if(score > 1){
//         document.querySelector('.message').textContent = 'Too high';
//         score--;
//     document.querySelector('.score').textContent = score
//     }else {
//     document.querySelector('.message').textContent =
//     'you lose the game'
//     document.querySelector('.score').textContent =
//     0;
//     }

//   }

// });

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
//  let score = 20;
// document.querySelector('.again').addEventListener('click',
//  function(){

//     document.querySelector('.guess').value = "";
//     document.querySelector('.message').textContent = 'Start guessing...'
//     document.querySelector('.score').textContent = '0'
//     document.querySelector('.number').textContent = '?'
//  });

// document.querySelector('.again').addEventListener
// ("click",  function(){
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.guess').value = "";
//     document.querySelector('.number').textContent = '?';

//     document.querySelector('.number').style.width = "15rem"
//     document.querySelector('body').style.backgroundColor = "#222"
// })

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess, guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'correct Number';
//     document.querySelector('body').style.backgroundColor = "green"
//     document.querySelector('.number').style.width = "35rem"

//   } else if (guess > secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent
//          = 'Too high';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent = 'You lose the game'
//         document.querySelector('.score').textContent = '0'
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//         document.querySelector('.message').textContent
//          = 'Too low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     }else{
//         document.querySelector('.message').textContent = 'You lose the game'
//         document.querySelector('.score').textContent = '0'
//     }

//   }
// });

// secretNumber = Math.trunc(Math.random() * 20) + 1;
//  score = 20;
// document.querySelector('.again').addEventListener('click',
//  function(){

//     document.querySelector('.guess').value = "";
//     document.querySelector('.message').textContent = 'Start guessing...'
//     document.querySelector('.score').textContent = '0'
//     document.querySelector('.number').textContent = '?'
//  });

/////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'You guess rigth';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '35rem';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = score
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = highscore;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too higth';
      score--;
      document.querySelector('.score').textContent = highscore;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});




document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...'
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('body').style.backgroundColor =  '#222'
});
