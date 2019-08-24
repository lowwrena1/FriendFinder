//get a route with the url /api/friends. this will be used to display a json of all possible friends
// post routes /api/friends. this will be used to handle incoming survey results. this route will also be used to hand compatibility logic.
// We are linking our routes to a series of "data" sources.

// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/home.html"));
      });
    });
// post to handle incoming data


