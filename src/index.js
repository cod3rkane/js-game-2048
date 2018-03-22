import Grid from './grid';
import Matrix from './matrix';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const grid = new Grid({ context, width: 500, height: 500 });
grid.draw();

const matrix = new Matrix();
matrix.up();
console.table(matrix.matrix);
