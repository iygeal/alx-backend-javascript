const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let spy;

  beforeEach(function () {
    // Set up the spy before each test
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    // Restore the spy after each test
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct args', function () {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});
