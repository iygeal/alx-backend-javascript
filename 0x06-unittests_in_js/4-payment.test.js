const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let stub, spy;

  beforeEach(function () {
    // Stub the calculateNumber method to return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    spy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and spy after each test
    stub.restore();
    spy.restore();
  });

  it('should call Utils.calculateNumber with SUM and the correct arguments', function () {
    sendPaymentRequestToApi(100, 20);

    // Check that the stub was called with correct args
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Check that console.log was called with the correct message
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
