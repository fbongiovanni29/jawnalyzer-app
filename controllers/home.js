var request = require('request');

exports.index = function (req, res) {
  request('http://localhost:4567/api/get/0', function(err, response, body) {
    if(!err && response.statusCode == 200) {
        res.render('index', {
            technologies: Object.keys(JSON.parse(body).technologies)
      });
    }
    if(err) console.log(err);
  })
}

exports.noRoute = function (req, res) {
    res.send('404')
}
