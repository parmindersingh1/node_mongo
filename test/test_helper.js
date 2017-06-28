const mongoose = require('mongoose');

before(done => {
	mongoose.connect('mongodb://localhost/muber_test');
mongoose.connection
.on('error', err => {
	console.warn('Warning, error');
})
.once('open',  () => done() )
});

beforeEach(done => {

	// const { drivers } = mongoose.connection.collections;//es6 equivalent
	const  drivers  = mongoose.connection.collections.drivers;
	drivers.drop()
		.then(()=> drivers.ensureIndex({'geometry.coordinates': '2dsphere'}))	
		.then(()=> done())
		.catch(()=> done());
})