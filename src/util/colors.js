export const colors = {
  0: {
    color: '#776e65',
    textColor: '#faf8ef',
  },
  2: {
    color: '#eee4da',
    textColor: '#776e65',
  },
  4: {
    color: '#ede0c8',
    textColor: '#776e65',
  },
  8: {
    color: '#f2b179',
    textColor: '#f9f6f2',
  },
  16: {
    color: '#f59563',
    textColor: '#f9f6f2',
  },
  32: {
    color: '#f67c5f',
    textColor: '#f9f6f2',
  },
  64: {
    color: '#f65e3b',
    textColor: '#f9f6f2',
  },
  128: {
    color: '#edcf72',
    textColor: '#f9f6f2',
  },
  256: {
    color: '#edcc61',
    textColor: '#f9f6f2',
  },
  512: {
    color: '#edc850',
    textColor: '#f9f6f2',
  },
  1024: {
    color: '#edc53f',
    textColor: '#f9f6f2',
  },
  2048: {
    color: '#edc22e',
    textColor: '#f9f6f2',
  },
};

export const getColor = (value) => {
  if (colors[value]) {
    return colors[value];
  }

  return colors[2048];
};
