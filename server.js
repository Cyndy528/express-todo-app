var express = require ('express'); 

var bodyParser = require('body-Parser'); 

var app = express(); 

//set up body parser for post stuff
app.use(bodyParser.urlencoded({ extended : true})); 


app.get('/api', function(req, res){
	res.json({ test : "hello"});
});





var server = app.listen(process.env.PORT || 3000, function(){
	console.log("I am listening"); 
});