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

//set all mornings 
app.get('/api/Mornings', function(req, res){
	res.json( weekday_Mornings ); 
}); 

//get a single mornings
app.get('/api/mornings/:id', function(req, res){

	//get mornings id from URL params
	var morningID = parseInt(req.params.id); 
	
	//find mornings by id
	var foundMorning = weekday_Mornings.filter(function(mornings){
		return weekday_Mornings._id == morningID; 
	}); 
	//send foundMorning as JSON
	res.json(foundMorning); 

}); 



//post a single morning
app.post('/api/mornings', function(req, res){

	//create a new morning with form data 
	var newMornings = req.body; 
	
	//set a sequential id, only checking 
	if (weekday_Mornings.length > 0){
		newMornings._id = weekday_Mornings[weekday_Mornings.length - 1]._id + 1; 
	} else {
		newMornings._id = 1; 
	}
	//add new morning to 'weekday_Mornings' array
	weekday_Mornings.push(newMornings);

	//send newMorning as JSON object
	res.json( newMornings ); 
}); 


//update morning 
app.put ('api/mornings/:id', function (req, res) {
	//get morning id from url params ('req.params')
	var morningID = parseInt(req.params.id); 

	//find morning to update it's id
	var morningToUpDate = mornings.filter(function(morning){ 
		return morning._id === morningId; 
	}) [0]; 
	//update the morning's task
	morningToUpDate.task = req.body.task;
	
	//update the morning's description
	morningToUpDate.description = req.body.description;
	
	//send back updated morning
	res.json(morningToUpDate); 
});

//delete morning
app.delete('api/mornings/:id', function(req, res){
	//get morning id from url params ('req.params')
	var morningID= parseInt(req.params.id); 

	//find morning to delete by its id
	var morningToDelete = morning.filter(function(morning) {
		return morning._id === morningId; 
	}) [0]; 

	//find index of morning in 'morning' array
	var morningIndex = morning.indexOf(morningToDelete); 

	//remove morning from 'morning' array
	morning.splice(morningIndex, 1); 

	//send back deleted morning
	res.json(morningToDelete); 
	
}); 




var server = app.listen(process.env.PORT || 3000, function(){
	console.log("I am listening"); 
});