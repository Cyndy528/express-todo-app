// todosTest.js (file)

var request= require('request'), 
	expect = require('chai').expect, 
	baseUrl ='http://localhost:3000'; 

describe('Todos', function() {
	//we want 'done' to be called back 
	it('should list ALL todos GET / api/todos', function(done){

		request(baseUrl + '/api/todos, function (error, response, body');
			//assertion
			expect (response.statusCode).to.equal(200); 
			done(); 
		}); 
}); 
// (similar to appt. lab)