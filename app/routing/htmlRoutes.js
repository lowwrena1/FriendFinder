// get a route to /survey which would display the survey page
// default, catch-all route that leads to home.html which displays the homepage
// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
const port = 3030;

// get request to send home.html by default
app.get('/', function(req, res){

});

// get request to send survey.html to client
app.get('/survey', function(req, res){

});
