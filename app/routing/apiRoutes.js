//get a route with the url /api/friends. this will be used to display a json of all possible friends
// post routes /api/friends. this will be used to handle incoming survey results. this route will also be used to hand compatibility logic.
// We are linking our routes to a series of "data" sources.

// express integration
var express = require('express');
var app = express();
// path integration
var path = require('path');
// port location
const port = 3030;

// get request to return friends json object to client
app.get('/api/friends', function(req, res){
    return res.json(/* VARIABLE NAME/REFERENCE TO FRIENDS DATA */)
});

// post to handle incoming data
app.post('/api/friends', function(req, res){
    /* CODE TO HANDLE INCOMING DATA AND POST TO DATABASE + HANDLE COMPATABILITY LOGIC */
})
//##############################################################################################################
function findMatch(newbie) {
    var friendDataRefresh = friendsData;

    // loop through each friend minus the one (the user whose input was just added)
    for (var i = 0; i < friendDataRefresh.length; i++) {
        friendDataRefresh[i].difference = [];
        friendDataRefresh[i].totalDifference;

        for (var j = 0; j < friendDataRefresh[i].scores.length; j++) {
            // loops through scores; pushes to array
            friendDataRefresh[i].difference.push(Math.abs(newbie.scores[j] - friendDataRefresh[i].scores[j]));
            friendDataRefresh[i].totalDifference = friendDataRefresh[i].difference.reduce((a, b) => a + b, 0);
        }
    }
    var totalDiffArr = [];
    for (var i = 0; i < friendDataRefresh.length; i++) {
        totalDiffArr.push(friendDataRefresh[i].totalDifference);
        var index = 0;
        var value = totalDiffArr[0];
        for (var j = 1; j < friendDataRefresh.length; j++) {
            if (totalDiffArr[j] < value) {
                value = totalDiffArr[j];
                index = j;
            }
        }

    }
    return friendDataRefresh[index];

}