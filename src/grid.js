export const MAX_COLS = 4;

export default class Grid {
  constructor({ context, width, height }) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.boxSize = width / MAX_COLS;
  }

  draw() {
    for (let i = 0; i <= MAX_COLS; i += 1) {
      for (let j = 0; j <= MAX_COLS; j += 1) {
        this.drawBox({
          color: '#eee4db',
          x: i * this.boxSize,
          y: j * this.boxSize,
          size: this.boxSize,
          text: 2,
        });
      }
    }
  }

  drawBox({ color, x, y, size, text }) {
    // Text
    this.context.fillStyle = '#766e65';
    this.context.font = '58px serif';
    this.context.textAlign = 'center';
    this.context.fillText(text, x - 62.5, y - 48);

    this.context.fillStyle = color;
    this.context.fillRect(x, y, size, size);
    this.context.strokeStyle = '#bbad9f';
    this.context.lineWidth = 8;
    this.context.strokeRect(x, y, size, size);
  }
}
