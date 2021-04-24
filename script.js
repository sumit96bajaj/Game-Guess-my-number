'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number entered');
    // document.querySelector('.message').textContent = 'No number entered';
  } else if (guess === secretNumber) {
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      document.querySelector('.label-highscore').textContent =
        ' 🥇 Highscore:     ' + highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.label-score').textContent = 'Score: ' + score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.label-score').textContent = 'Score: ' + 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing');
  document.querySelector('.label-score').textContent = '💯 Score:     ' + score;
});
