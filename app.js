const express = require('express');
const bodyParser = require('body-parser');//middleware
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const app = express();

mongoose.Promise = global.Promise;
if(process.env.NODE_ENV !== 'test') {
	mongoose.connect('mongodb://localhost/muber');
}

// mongoose.connection
// .on('error', console.error.bind(console, 'connection error:'))


// .once('open', function callback () {
//   console.log("hello");
// });

app.use(bodyParser.json());//use above routes
routes(app);
//custom middleware
app.use((err, req, res, next) => {
	// console.log(err);
	res.status(422).send({error: err._message});
});




module.exports = app;