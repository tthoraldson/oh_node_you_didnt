var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var bios = require('./public/data/bios');
var likes = require('./public/routes/likes');

app.set('port', process.env.PORT || 3000);

app.use('/bios', function(req, res){
  res.send(bios);
});

app.use('/likes', function(req, res){
  res.send(likes);
});

app.get('/*', function (req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
