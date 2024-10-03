const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Importing the app to ensure it's available for testing

describe('Index page', () => {
  const baseUrl = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
