const Driver = require('../models/driver');

module.exports = {
	greeting(req, res) {
		res.send({hi: 'there'});
	},
	// equivaklent ES5
	// greeting: function(req, res) {

	// }
	index(req, res, next) {

		// get doesn't contain req body so we use query string
		const lng = req.query.lng
		const lat = req.query.lat;

		// const { lng, lat } = req.query; //es6 equivalent

		Driver.geoNear(
			{ type: 'Point', coordinates: [parseFloat(lng), parseFloat(lat)] },
			{ spherical: true, maxDistance: 200000}//200km
		)
		.then(drivers => res.send(drivers))
		.catch(next);
		
	},

	create(req, res, next) {
		const driverProps = req.body;
		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(next);
		
	},
	edit(req, res, next) {
		const driverId = req.params.id;
		const driverProps = req.body;
		
		Driver.findByIdAndUpdate({ _id: driverId }, driverProps)
			.then(() => Driver.findById({ _id: driverId }))
			.then(driver => res.send(driver))
			.catch(next);

		
	},
	delete(req, res, next) {
		const driverId = req.params.id;		
		
		Driver.findByIdAndRemove({ _id: driverId })
			.then(() => Driver.findById({ _id: driverId }))
			.then(driver => res.status(204).send(driver))
			.catch(next);

	}

};