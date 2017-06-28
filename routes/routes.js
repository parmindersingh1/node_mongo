const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {


	//request handler

	// when get http GET request
	//watch for incoming request to route http://localhost:3050/api
	// app.get('/api', (req, res) => {
	// 	res.send({ hi: 'there' });
	// });

	// app.put('/api');// when get http PUT request
	// app.post('/api');// when get http POST request
	// app.delete('/api');// when get http DELETE request


	app.get('/api' ,DriversController.greeting);

	app.post('/api/drivers', DriversController.create);

	app.put('/api/drivers/:id', DriversController.edit);

	app.delete('/api/drivers/:id', DriversController.delete);

	app.get('/api/drivers' ,DriversController.index);


};