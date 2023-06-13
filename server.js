process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3030);
module.exports = app;

console.log('Server running at https://henry-assignment1.herokuapp.com/');
