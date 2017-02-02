var express = require('express');  
var app = express(); 

app.set('view engine', 'jade');
// app.set('view engine', 'ejs');  

app.get('/', function(req, res) {  
  res.send('<h1>jade & express 範例</h1>');  
});  

app.get('/view/', function(req, res) {  
  res.render('example', {  
    title: 'Template example',  
    fruits: ['Apple', 'Banana', 'Orange'],
    person: {
      name: 'steve',
      sex: 'male'
    },
    html: "<h2>This is html code</h2>"
  });   
});  

app.listen(3000, function() {  
  console.log('Listening on port 3000');  
});   