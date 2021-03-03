const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';
const express = require('express');
const app = express();
var logger = require('morgan');
const cors = require("cors");

app.use(cors({
  exposedHeaders: ['Location'],
  credentials: true,
  origin: ['http://localhost:8080', 'http://localhost:8000']
}));
app.use(logger('dev'));
app.use('/assets', express.static('assets'));
//app.use('/views', express.static('views'));

app.listen(port, function (err) {
  if (!err) {
    console.log('Your app is listening on ' + host + ' and port ' + port);
  }
  else {
    console.log(err);
  }
});

module.exports = app;
require('./loader.js');