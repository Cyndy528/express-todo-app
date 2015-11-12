var express = require ('express'); 

var bodyParser = require('body-Parser'); 

var app = express(); 

//set up body parser for post stuff
app.use(bodyParser.urlencoded({ extended : true})); 

//seed data, includes elements of weekday_Mornings
var weekday_Mornings = [
			{_id : 1, 
			task: "Wake up at 6:30 am", 
			description: "Shower, eat breakfast, and pack lunch."
			},
			{_id : 2, 
			task: "Leave at 7:30 am", 
			description: "Walk to train, study day lesson for 20 minutes and read book for 10 minutes."
			},	
			{_id : 3, 
			task: "Arrive at 8:30 am", 
			description: "Answer emails and phone calls, and prepare for the day."
			}]; 

//set up routes
app.get('/api', function(req, res){
	res.json({test : 'this is working'}); 
}); 

//set all beers 
app.get('/api/weekday_Mornings', function(req, res){
	res.json( weekday_Mornings ); 
}); 



app.get('/api', function(req, res){
	res.json({ test : "hello"});
});





var server = app.listen(process.env.PORT || 3000, function(){
	console.log("I am listening"); 
});