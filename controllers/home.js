var request = require('request');

// exports.index = function (req, res) {
//   res.render('index');
// }

exports.index = function (req, res) {
  request('http://localhost:4567/api/get/0', function(err, response, body) {
      console.log()
    if(!err && response.statusCode == 200) {
        res.render('index', {
            technologies: JSON.parse(body)[0].technologies.Python
      });
    }
    if(err) console.log(err);
  })
}

exports.noRoute = function (req, res) {
    res.send('404')
}
