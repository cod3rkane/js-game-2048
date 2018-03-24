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
    const reversedMatrix = Array.reverse(this.matrix);
    const flippedMatrix = Matrix.flipMatrix(reversedMatrix);
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

    const test = Matrix.flipMatrix(newMatrix);

    this.matrix = Array.reverse(test);
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

  totalScore() {
    const sum = (acc, currentValue) => acc + currentValue;
    const total = this.matrix.map(row => row.reduce(sum)).reduce(sum);
    return total;
  }
}
