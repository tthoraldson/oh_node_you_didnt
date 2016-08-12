var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
