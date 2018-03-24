import { MAX_COLS } from './grid';

export default class Matrix {
  constructor() {
    this.matrix = Matrix.randomMatrix();
  }

  static randomMatrix() {
    const matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    let spots = Matrix.emptySpots(matrix);
    let spot = spots[Matrix.randomNumber(0, spots.length)];
    matrix[spot[0]][spot[1]] = Matrix.newNumber();

    spots = Matrix.emptySpots(matrix);
    spot = spots[Matrix.randomNumber(0, spots.length)];
    matrix[spot[0]][spot[1]] = Matrix.newNumber();

    return matrix;
  }

  static emptySpots(matrix) {
    let spots = matrix.map((row, index) => row.map((v, col) => {
      if (v === 0) {
        return [index, col];
      }

      return 0;
    }));

    spots = spots.map(row => row.filter(v => v));
    return spots.flatten();
  }

  static randomNumber(min, max) {
    return Math.floor(Math.random() * max - min) - min;
  }

  static newNumber() {
    const num = Math.round(Math.random());

    return num >= 1 ? 4 : 2;
  }

  static addingRandomNumber(matrix) {
    const newMatrix = Array.from(matrix);
    const spots = Matrix.emptySpots(matrix);
    const spot = spots[Matrix.randomNumber(0, spots.length)];
    newMatrix[spot[0]][spot[1]] = Matrix.newNumber();

    return newMatrix;
  }

  static flipMatrix(matrix) {
    const newMatrix = Array.from(matrix);

    return newMatrix[0].map((column, index) => newMatrix.map(row => row[index]));
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

  static combine(row) {
    const indices = [];
    return row.reduce((acc, cv, index, array) => {
      if (!indices.includes(index) && cv === array[index + 1]) {
        acc.push(cv + array[index + 1]);
        indices.push(index + 1);
      } else if (!indices.includes(index)) {
        acc.push(cv);
      }

      return acc;
    }, []);
  }

  up() {
    const reversedMatrix = Array.reverse(this.matrix);
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

    this.matrix = Matrix.addingRandomNumber(Array.reverse(normalMatrix));
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

    this.matrix = Matrix.addingRandomNumber(newMatrix);
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

    this.matrix = Matrix.addingRandomNumber(Matrix.flipMatrix(newMatrix));
  }

  left() {
    const newMatrix = this.matrix.map((row) => {
      const newRow = Matrix.combine(row.filter(value => value));
      if (newRow.length < MAX_COLS) {
        while (newRow.length < MAX_COLS) {
          newRow.push(0);
        }
      }

      return newRow;
    });

    this.matrix = Matrix.addingRandomNumber(newMatrix);
  }

  totalScore() {
    const sum = (acc, currentValue) => acc + currentValue;
    const total = this.matrix.map(row => row.reduce(sum)).reduce(sum);
    return total;
  }
}
