const assert =  require('assert');
const request = require('supertest');
const app = require('../app');


describe('The express app', () => {
	it('handles a GET request to /api', (done) => {
		// will be asynchronus so done is required
		request(app)
			.get('/api') //post,get,put,delete ...
			.end((err, response) => {
				assert(response.body.hi === 'there');
				done();
			});
	})
});
// install super test to fake http request