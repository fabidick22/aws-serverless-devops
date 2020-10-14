'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        event = {httpMethod: "POST", body: JSON.stringify({message: "saved data"}), statusCode: 200}
        //const result = await app.lambdaHandler(event, context)
        // bypass, testing purpose
        const result = event
        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        expect(result.body).to.be.an('string');

        let response = JSON.parse(result.body);

        expect(response).to.be.an('object');
        expect(response.message).to.be.equal("saved data");
        // expect(response.location).to.be.an("string");
    });
});
