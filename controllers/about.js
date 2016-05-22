var path = require('path');

exports.index = function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'about', 'index.html'));
}

exports.about = function (req, res) {
    res.send('ABOUT PAGE!!!');
}

exports.noRoute = function (req, res) {
    res.send('404')
}
