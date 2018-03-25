import { MAX_COLS } from './grid';
import MatrixUtil from './util/matrix';

export default class Matrix extends MatrixUtil {
  constructor() {
    super();
    this.matrix = Matrix.randomMatrix();
  }

  newGame() {
    this.matrix = Matrix.randomMatrix();
  }

  up() {
    const mx = Array.from(this.matrix);
    const reversedMatrix = Array.reverse(mx);
    const flippedMatrix = Matrix.flipMatrix(reversedMatrix);
    const newMatrix = flippedMatrix.map((row) => {
      const newRow = Matrix.combine(row.filter(value => value));

      if (newRow.length < MAX_COLS) {
        newRow.reverse();
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
        newRow.reverse();
      }

      return newRow;
    });

    const normalMatrix = Matrix.flipMatrix(newMatrix);
    const normalMatrixReversed = Array.reverse(normalMatrix);

    if (this.matrix.toString() !== normalMatrixReversed.toString()) {
      this.matrix = Matrix.addingRandomNumber(normalMatrixReversed);
    } else {
      this.matrix = normalMatrixReversed;
    }
  }

  right() {
    const newMatrix = this.matrix.map((row) => {
      const newRow = Matrix.combine(row.filter(value => value));

      if (newRow.length < MAX_COLS) {
        newRow.reverse();
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
        newRow.reverse();
      }

      return newRow;
    });

    if (this.matrix.toString() !== newMatrix.toString()) {
      this.matrix = Matrix.addingRandomNumber(newMatrix);
    } else {
      this.matrix = newMatrix;
    }
  }

  down() {
    const flippedMatrix = Matrix.flipMatrix(this.matrix);
    const newMatrix = flippedMatrix.map((row) => {
      const newRow = Matrix.combine(row.filter(value => value));
      if (newRow.length < MAX_COLS) {
        newRow.reverse();
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
        newRow.reverse();
      }

      return newRow;
    });

    const mx = Matrix.flipMatrix(newMatrix);

    if (this.matrix.toString() !== mx.toString()) {
      this.matrix = Matrix.addingRandomNumber(mx);
    } else {
      this.matrix = mx;
    }
  }

  left() {
    const newMatrix = this.matrix.map((row) => {
      const filteredRow = row.filter(value => value);
      const newRow = Matrix.combine(filteredRow.reverse()).reverse();
      if (newRow.length < MAX_COLS) {
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
      }

      return newRow;
    });

    if (this.matrix.toString() !== newMatrix.toString()) {
      this.matrix = Matrix.addingRandomNumber(newMatrix);
    } else {
      this.matrix = newMatrix;
    }
  }

  totalScore() {
    const sum = (acc, currentValue) => acc + currentValue;
    const total = this.matrix.map(row => row.reduce(sum)).reduce(sum);
    return total;
  }
}
