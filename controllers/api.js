var path = require('path');
var fs = require('fs');

exports.all = function(req, res) {
    var jsonPath = path.join(__dirname, '/../data/all-companies.json');
    fs.readFile(jsonPath, 'utf-8', function(err, data) {
        if (err) throw err;
        res.send('JSON.parse(data)');
    });
}

exports.get = function(req, res){
    var jsonPath = path.join(__dirname, '/../data/all-companies.json');
    fs.readFile(jsonPath, 'utf-8', function(err, data) {
        if (err) throw err;
        fs.readFile(jsonPath, 'utf-8', function(err, data){
            var database = JSON.parse(data);
            res.send(database);
        });
    });
}
