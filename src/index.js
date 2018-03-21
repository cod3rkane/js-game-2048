import Grid from './grid';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const grid = new Grid({ context, width: 500, height: 500 });

const Matrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
grid.draw();
