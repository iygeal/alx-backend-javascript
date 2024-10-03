const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Returns StatusCode: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('Returns available payment methods', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const parsedBody = JSON.parse(body);
        expect(parsedBody).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('Returns welcome message for the given userName', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('Returns 400 if no userName is provided', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {}, // Empty body
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal('UserName not provided');
        done();
      });
    });
  });
});
