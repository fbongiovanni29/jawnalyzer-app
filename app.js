  var express = require('express');
  var app = express();

  port = process.env.PORT || 4567
  // Tell app.js about the home controller using require
  var homeController = require('./controllers/home');
  var apiController = require('./controllers/api')

  // Sets view engine similar to jade rendering
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

  // Routes
  app.get('/', homeController.index);

  app.get('/api/all', apiController.all);
  app.get('/api/get/:id', apiController.get);


  app.get('/*', homeController.noRoute)

  app.listen(port, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
