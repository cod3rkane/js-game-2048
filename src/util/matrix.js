export default class MatrixUtil {
  static randomMatrix() {
    const matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    let spots = MatrixUtil.emptySpots(matrix);
    let spot = spots[MatrixUtil.randomNumber(0, spots.length)];
    matrix[spot[0]][spot[1]] = MatrixUtil.newNumber();

    spots = MatrixUtil.emptySpots(matrix);
    spot = spots[MatrixUtil.randomNumber(0, spots.length)];
    matrix[spot[0]][spot[1]] = MatrixUtil.newNumber();

    return matrix;
  }

  static emptySpots(matrix) {
    let spots = matrix.map((row, index) =>
      row.map((v, col) => {
        if (v === 0) {
          return [index, col];
        }

        return 0;
      }),
    );

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
    const spots = MatrixUtil.emptySpots(matrix);
    const spot = spots[MatrixUtil.randomNumber(0, spots.length)];
    newMatrix[spot[0]][spot[1]] = MatrixUtil.newNumber();

    return newMatrix;
  }

  static flipMatrix(matrix) {
    const newMatrix = Array.from(matrix);

    return newMatrix[0].map((column, index) =>
      newMatrix.map(row => row[index]),
    );
  }

  static rotateMatrix(matrix) {
    return MatrixUtil.flipMatrix(matrix.reverse());
  }

  static rotateMatrixCounterClockwise(matrix) {
    return MatrixUtil.flipMatrix(matrix).reverse();
  }

  static flipMatrixCounterClockwise(matrix) {
    return MatrixUtil.rotateMatrix(matrix).reverse();
  }

  static combine(row) {
    const indices = [];
    const newRow = Array.from(row);
    newRow.reverse();
    const combinedRow = newRow.reduce((acc, cv, index, array) => {
      if (!indices.includes(index) && cv === array[index + 1]) {
        acc.push(cv + array[index + 1]);
        indices.push(index + 1);
      } else if (!indices.includes(index)) {
        acc.push(cv);
      }

      return acc;
    }, []);

    return combinedRow.reverse();
  }
}
