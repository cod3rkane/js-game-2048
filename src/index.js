import './style.scss';

import Grid from './grid';
import Matrix from './matrix';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const scoreElm = document.getElementById('score');
const gameOverElm = document.getElementById('gameOver');
const newGameElm = document.getElementsByClassName('newGame');
const bestScoreElm = document.getElementById('bestScore');

const grid = new Grid({ context, width: 500, height: 500 });
const matrix = new Matrix();

newGameElm.item(0).addEventListener('click', () => matrix.newGame());
newGameElm.item(1).addEventListener('click', () => {
  if (gameOverElm.classList.contains('show')) {
    gameOverElm.classList.remove('show');
    matrix.newGame();
  }
});

function updateUI() {
  scoreElm.innerHTML = matrix.totalScore();
  if (localStorage.getItem('scores')) {
    bestScoreElm.innerHTML = JSON.parse(localStorage.getItem('scores')).bestScore;
  }
}

function updateBestScore(score) {
  const store = localStorage.getItem('scores');
  if (store) {
    const scores = JSON.parse(store);
    if (score > scores.bestScore) {
      scores.bestScore = score;
    }

    scores.list.push(score);
    localStorage.setItem('scores', JSON.stringify(scores));
  } else {
    const scores = {
      bestScore: score,
      list: [score],
    };

    localStorage.setItem('scores', JSON.stringify(scores));
  }
}

function gameControls(e) {
  switch (e.key) {
    case 'ArrowUp':
      matrix.up();
      break;
    case 'ArrowRight':
      matrix.right();
      break;
    case 'ArrowDown':
      matrix.down();
      break;
    case 'ArrowLeft':
      matrix.left();
      break;
    default:
      break;
  }
}

document.onkeydown = gameControls;
function gameLoop() {
  window.requestAnimationFrame(gameLoop);

  updateUI();
  if (matrix.isGameOver(matrix.matrix)) {
    if (!gameOverElm.classList.contains('show')) {
      updateBestScore(matrix.score);
      gameOverElm.classList.add('show');
    }
  }

  grid.draw(matrix.matrix);
}
// @TODO check some stuffs here, like, game over, pause, etc..
gameLoop();
