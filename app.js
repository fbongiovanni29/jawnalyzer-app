var express = require('express');
var app = express();


// Tell app.js about the home controller using require
var homeController = require('./controllers/home');
var apiController = require('./controllers/api')

// Serve static files (i.e. images, scripts, styles, templates) from public/ directory
app.use(express.static('public'));

//Jade
app.set('view engine', 'pug');

// Routes
app.get('/', homeController.index);


app.get('/api/all', apiController.all);
app.get('/api/get/:id', apiController.get);


app.get('/*', homeController.noRoute)

app.listen(4567, function () {
    console.log('Your app is listening on port 4567!');
});
