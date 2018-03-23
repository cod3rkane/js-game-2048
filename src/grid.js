export const MAX_ROWS = 4;
export const MAX_COLS = 4;

export default class Grid {
  constructor({ context, width, height }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.boxSize = 112;
  }

  draw(matrix) {
    if (!matrix) {
      throw new Error('You need to pass a matrix, neo.');
    }
    this.drawBackgroubd();
    for (let col = 0; col < MAX_COLS; col += 1) {
      for (let row = 0; row < MAX_ROWS; row += 1) {
        const value = matrix[col][row];
        const xSpace = row === 0 ? 10 : (row + 1) * 10;
        const ySpace = col === 0 ? 10 : (col + 1) * 10;
        this.drawBox({
          color: '#eee4db',
          x: (row * this.boxSize) + xSpace,
          y: (col * this.boxSize) + ySpace,
          size: this.boxSize,
          text: value,
        });
      }
    }
  }

  drawBackgroubd() {
    this.context.fillStyle = '#bbad9f';
    this.context.fillRect(0, 0, this.width, this.height);
  }

  drawBox({ color, x, y, size, text }) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, size - 20, size - 20);
    this.context.lineJoin = 'round';
    this.context.lineWidth = 20;

    this.context.strokeStyle = color;
    this.context.strokeRect(x + (20 / 2), y + (20 / 2), size - 20, size - 20);
    this.context.fillRect(x + (20 / 2), y + (20 / 2), size - 20, size - 20);

    this.context.font = '58px serif';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#fff';
    this.context.fillText(text, x + 58, y + 74);
  }
}
