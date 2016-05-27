  var Layout = require('./views/layout.jsx');
  var HomePage = require('./views/index.jsx');

  var routes = module.exports = (
    <Router>
      <Route path='/' component={Layout}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  );
