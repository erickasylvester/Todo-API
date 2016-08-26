var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Get Facial Done',
	completed: false
}, {
	id:2,
	description: 'Go to market',
	completed: true
}, {
	id:3,
	description: 'Study',
	completed: false
}];

//Get the root
app.get('/', function(req, res){
	res.send('Todo API Root')
});

//GET /todos 
//convert to json becuase only text can be passed and forth
//instead of json.stringify
app.get('/todos', function(req, res){
	res.json(todos);
});

//GET /todos/:id 
app.get('/todos/:id', function(req, res){
	//req.params.id is always a string
	var todoID = parseInt(req.params.id);
	var found;
	todos.forEach(function(todo){
		if(todoID === todo.id)
		{
			found = todo;
		}
	});
	if (!found)
	{
		res.status(404).send();
	}
	else
	{
		res.json(found);
	}
	res.json('Asking for todo with id of ' + req.params.id);
});

app.listen(PORT, function(){
	console.log('Express listening on port ' + PORT)
})

