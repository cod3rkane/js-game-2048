import { expect } from 'chai';
import MatrixUtil from '../src/util/matrix';

describe('Matrix Util', () => {
  const matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  const fullMatrix = [[2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2], [2, 2, 2, 2]];
  describe('#cloneMatrix()', () => {
    it('should return a clone of a given matrix.', () => {
      const clonedMatrix = MatrixUtil.cloneMatrix(matrix);
      expect(clonedMatrix)
        .to.be.an('array')
        .and.eql([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    });

    it('should throw an Error.', () => {
      expect(MatrixUtil.cloneMatrix).to.throw();
    });
  });

  describe('#randomMatrix()', () => {
    it('should return a randomMatrix.', () => {
      expect(MatrixUtil.randomMatrix()).to.be.an('array');
    });
  });

  describe('#emptySpots()', () => {
    it('given a full 4x4 matrix, should return an empty array', () => {
      expect(MatrixUtil.emptySpots(fullMatrix)).to.be.an('array').and.to.have.lengthOf(0);
    });

    it('given a 4x4 matrix with 0, should return an array with length of 16.', () => {
      expect(MatrixUtil.emptySpots(matrix)).to.be.an('array').and.to.have.lengthOf(16);
    });
  });

  describe('#randomNumber()', () => {
    it('given two numbers, should return a number between that two numbers.', () => {
      expect(MatrixUtil.randomNumber(0, 5)).to.be.an('number');
    });

    it('given 0 and 1, should return 0 or 1.', () => {
      expect(MatrixUtil.randomNumber(0, 1)).to.be.an('number');
    });
  });

  describe('#newNumber()', () => {
    it('should be a number', () => {
      expect(MatrixUtil.newNumber()).to.be.an('number');
    });
  });

  describe('#addingRandomNumber()', () => {
    it('should return a 4x4 matrix', () => {
      expect(MatrixUtil.addingRandomNumber(matrix)).to.be.an('array').and.to.have.lengthOf(4);
    });
  });

  describe('#flipMatrix()', () => {
    it('should return a 4x4 matrix', () => {
      expect(MatrixUtil.flipMatrix(matrix)).to.be.an('array').and.to.have.lengthOf(4);
    });
  });

  describe('#rotateMatrix()', () => {
    it('should return a 4x4 matrix', () => {
      expect(MatrixUtil.rotateMatrix(matrix)).to.be.an('array').and.to.have.lengthOf(4);
    });
  });

  describe('#rotateMatrixCounterClockwise()', () => {
    it('should return a 4x4 matrix', () => {
      expect(MatrixUtil.rotateMatrixCounterClockwise(matrix)).to.be.an('array').and.to.have.lengthOf(4);
    });
  });

  describe('#flipMatrixCounterClockwise()', () => {
    it('should return a 4x4 matrix', () => {
      expect(MatrixUtil.flipMatrixCounterClockwise(matrix)).to.be.an('array').and.to.have.lengthOf(4);
    });
  });
});
