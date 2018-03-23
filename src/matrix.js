import { MAX_COLS, MAX_ROWS } from './grid';

export default class Matrix {
  constructor() {
    this.matrix = [
      [3, 0, 0, 0],
      [0, 4, 2, 0],
      [0, 0, 4, 2],
      [2, 2, 0, 2],
    ];
  }

  static flipMatrix(matrix) {
    const newMatrix = new Array(3);
    const maxRows = MAX_ROWS - 1;
    for (let row = 0; row < MAX_COLS; row += 1) {
      newMatrix[maxRows - row] = matrix[row];
    }

    return newMatrix;
  }

  up() {
    for (let row = 0; row < MAX_ROWS; row += 1) {
      for (let col = 0; col < MAX_COLS; col += 1) {
        const value = this.matrix[row][col];
        if (value !== 0 && row !== 0) {
          let valueRow = row;
          this.matrix[row][col] = 0;

          do {
            if (this.matrix[valueRow - 1][col] === 0) {
              valueRow -= 1;
            } else {
              break;
            }
          } while (valueRow > 0 && valueRow < MAX_ROWS);

          if (this.matrix[valueRow][col] === 0) {
            this.matrix[valueRow][col] = value;
          }
        }
      }
    }
  }

  down() {
    const flippedMatrix = Matrix.flipMatrix(this.matrix);
    for (let row = 0; row < MAX_ROWS; row += 1) {
      for (let col = 0; col < MAX_COLS; col += 1) {
        const value = flippedMatrix[row][col];
        if (value !== 0 && row !== 0) {
          let valueRow = row;
          flippedMatrix[row][col] = 0;

          do {
            if (flippedMatrix[valueRow - 1][col] === 0) {
              valueRow -= 1;
            } else {
              break;
            }
          } while (valueRow > 0 && valueRow < MAX_ROWS);

          if (flippedMatrix[valueRow][col] === 0) {
            flippedMatrix[valueRow][col] = value;
          }
        }
      }
    }

    this.matrix = Matrix.flipMatrix(flippedMatrix);
  }
}
