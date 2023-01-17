'use strict';
const again = document.querySelector('.again');
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

let highScore = document.querySelector('.highscore').textContent;
let score = 20;
const btnCheck = document.querySelector('.check');

// If Condaition fo number didnt exis or emapty messgae => '⛔ a number' , if number > secretnumber message => ' 📈 too High', if number < secretnumber message => '📉 too Low'

// Good Refactoring technighe is create function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// addEventListener
btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);
  if (!guess) {
    displayMessage('⛔ No  number');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉🎉 correct Number !');
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //Refactoring our code
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 too High' : '📉 too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the Game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when guess is too high
  /*   } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '💥 You lost the Game';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📈 too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message.textContent = '💥 You lost the Game';

      document.querySelector('.score').textContent = 0;
    }
  } */
});

// reset some data when clicking Agian button .
again.addEventListener('click', function () {
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.number').style.width = '15rem';
});
//Refactoring Our Code => The DRY Principle => DRY => Dont Repeat Your self
