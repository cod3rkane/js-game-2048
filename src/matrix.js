import { MAX_COLS, MAX_ROWS } from './grid';
import MatrixUtil from './util/matrix';

export default class Matrix extends MatrixUtil {
  constructor() {
    super();
    this.matrix = Matrix.randomMatrix();
    this.score = 0;
  }

  newGame() {
    this.score = 0;
    this.matrix = Matrix.randomMatrix();
  }

  up() {
    const mx = Matrix.cloneMatrix(this.matrix);
    const reversedMatrix = Array.reverse(mx);
    const flippedMatrix = Matrix.flipMatrix(reversedMatrix);
    const newMatrix = flippedMatrix.map((row) => {
      const newRow = this.combine(row.filter(value => value));

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
      const newRow = this.combine(row.filter(value => value));

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
      const newRow = this.combine(row.filter(value => value));
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
      const newRow = this.combine(filteredRow.reverse()).reverse();
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
    return this.score;
  }

  updateScore(score) {
    this.score += score;
  }

  combine(row, updateScore = true) {
    const indices = [];
    const newRow = Array.from(row);
    newRow.reverse();
    const combinedRow = newRow.reduce((acc, cv, index, array) => {
      if (!indices.includes(index) && cv === array[index + 1]) {
        const sum = cv + array[index + 1];
        acc.push(sum);
        indices.push(index + 1);
        if (updateScore) {
          this.updateScore(sum);
        }
      } else if (!indices.includes(index)) {
        acc.push(cv);
      }

      return acc;
    }, []);

    return combinedRow.reverse();
  }

  isGameOver(matrix) {
    const spots = Matrix.emptySpots(matrix);

    if (spots.length === 0) {
      const possibleMatches = [];
      const mx = Matrix.cloneMatrix(matrix);

      const updatePossibleMatch = (row) => {
        const combinedRow = this.combine(row, false);
        if (combinedRow.length < MAX_ROWS) {
          possibleMatches.push(true);
        }
      };

      // up
      const flippedMxUp = Matrix.flipMatrix(mx.reverse());
      flippedMxUp.map(row => updatePossibleMatch(row));

      // right
      mx.map(row => updatePossibleMatch(row));

      // down
      const flippedMxDown = Matrix.flipMatrix(mx);
      flippedMxDown.map(row => updatePossibleMatch(row));

      // left
      mx.map(row => updatePossibleMatch(row.reverse()));

      return possibleMatches.length === 0;
    }

    return false;
  }
}
