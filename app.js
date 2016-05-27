  var express = require('express');
  var app = express();


  // Tell app.js about the home controller using require
  var homeController = require('./controllers/home');
  var apiController = require('./controllers/api')

  //Jade
  // app.set('view engine', 'pug');

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  // Routes
  app.get('/', homeController.index);

  app.get('/api/all', apiController.all);
  app.get('/api/get/:id', apiController.get);


  app.get('/*', homeController.noRoute)

  app.listen(4567, function () {
    console.log('Your app is listening on port 4567!');
  });
