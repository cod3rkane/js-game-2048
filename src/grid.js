export const MAX_COLS = 4;

export default class Grid {
  constructor({ context, width, height }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.boxSize = width / MAX_COLS;
  }

  draw(matrix) {
    this.drawBackgroubd();
    for (let col = 0; col < MAX_COLS; col += 1) {
      for (let row = 0; row < MAX_COLS; row += 1) {
        const value = matrix[col][row];
        this.drawBox({
          color: '#eee4db',
          x: row * this.boxSize,
          y: col * this.boxSize,
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
    this.context.fillRect(x, y, size, size);

    this.context.font = '58px serif';
    this.context.textAlign = 'center';
    this.context.fillStyle = '#fff';
    this.context.fillText(text, x + 62.5, y + 82);
  }
}
