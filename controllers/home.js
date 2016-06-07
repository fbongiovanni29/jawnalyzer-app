var request = require('request');

exports.index = function (req, res) {
  request('http://localhost:' + port + '/api/get/0', function(err, response, body) {
    if(!err && response.statusCode == 200) {
        res.render('index', {
            technologies: JSON.parse(body),
            jawn: JSON.parse(body)
      });
    }
    if(err) console.log(err);
  })
}

exports.noRoute = function (req, res) {
    res.send('404')
}
