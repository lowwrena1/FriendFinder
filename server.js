var bodyParser=require('body-parser');
var express = require('express');
var app = express ();
var PORT = process.env.PORT || 8080;
app.get('/', function(req,res){
    res.send ('Test');//should show up on our screen?
})
app.use(bodyParser.urlencoded({ extended:false
}))
app.use(bodyParser.json())
app.use(function(req,res){
    res.setHeader('content-Type','text/plain')
    res.write('you posted:\n')
    res.end(json.stringify(req.body,null,2))
})
app.listen(PORT, function(){
    console.log("App listening on port: " + PORT);
});