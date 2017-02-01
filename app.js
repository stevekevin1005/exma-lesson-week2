var express = require('express');  
var app = express(); 

// app.set('view engine', 'jade');
app.set('view engine', 'ejs');  

app.get('/', function(req, res) {  
  res.send('<h1>jade & express 範例</h1>');  
});  

app.get('/view/', function(req, res) {  
  res.render('example');   
});  

app.listen(3000, function() {  
  console.log('Listening on port 3000');  
});   