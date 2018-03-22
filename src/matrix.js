import { MAX_COLS } from './grid';

export default class Matrix {
  constructor() {
    this.matrix = [
      [3, 0, 0, 0],
      [0, 4, 2, 0],
      [0, 0, 4, 2],
      [2, 2, 0, 2],
    ];
  }

  up() {
    for (let row = 0; row < MAX_COLS; row += 1) {
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
          } while (valueRow > 0 && valueRow < MAX_COLS);

          if (this.matrix[valueRow][col] === 0) {
            this.matrix[valueRow][col] = value;
          }
        }
      }
    }
  }
}
