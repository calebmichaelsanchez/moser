'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res, next){
  var path = req.path;
  res.locals.path = path;
  res.render('index');
});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});
