import { MAX_COLS, MAX_ROWS } from './grid';

export default class Matrix {
  constructor() {
    this.matrix = [
      [3, 0, 0, 2],
      [0, 4, 2, 2],
      [0, 0, 4, 2],
      [2, 2, 0, 2],
    ];
  }

  static flipMatrix(matrix) {
    return matrix[0].map((column, index) => (
      matrix.map(row => row[index])
    ));
  }

  static rotateMatrix(matrix) {
    return Matrix.flipMatrix(matrix.reverse());
  }

  static rotateMatrixCounterClockwise(matrix) {
    return Matrix.flipMatrix(matrix).reverse();
  }

  static flipMatrixCounterClockwise(matrix) {
    return Matrix.rotateMatrix(matrix).reverse();
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

  right() {
    const newMatrix = this.matrix.map((row) => {
      const newRow = row.filter(value => value);
      if (newRow.length < MAX_COLS) {
        newRow.reverse();
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
        newRow.reverse();
      }

      return newRow;
    });

    this.matrix = newMatrix;
  }

  down() {
    const flippedMatrix = Matrix.flipMatrix(this.matrix);
    const newMatrix = flippedMatrix.map((row) => {
      const newRow = row.filter(value => value);
      if (newRow.length < MAX_COLS) {
        newRow.reverse();
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
        newRow.reverse();
      }

      return newRow;
    });

    this.matrix = Matrix.flipMatrix(newMatrix);
  }

  left() {
    const newMatrix = this.matrix.map((row) => {
      const newRow = row.filter(value => value);
      if (newRow.length < MAX_COLS) {
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
      }

      return newRow;
    });

    this.matrix = newMatrix;
  }
}
