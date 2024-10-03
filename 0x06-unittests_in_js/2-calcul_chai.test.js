import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('Tests calculateNumber function with Chai:', function () {
  describe('SUM type:', function () {
    it('should return 6 when rounding 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT type:', function () {
    it('should return -4 when rounding 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE type:', function () {
    it('should return 0.2 when rounding 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    });
    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
