const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Tests calculateNumber function with different types:', function () {
  describe('SUM type:', function () {
    it('Returns 6 when summing 1.4 and 4.5.', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT type:', function () {
    it('Returns -4 when subtracting 1.4 and 4.5.', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE type:', function () {
    it('Returns 0.2 when dividing 1.4 by 4.5.', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('Returns "Error" when dividing by 0.', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
