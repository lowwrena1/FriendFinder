// get a route to /survey which would display the survey page
// default, catch-all route that leads to home.html which displays the homepage
// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
const port = 3000;

// get request to send home.html by default
app.get('/', function(req, res){

});

// get request to send survey.html to client
app.get('/survey', function(req, res){

});

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
 
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };