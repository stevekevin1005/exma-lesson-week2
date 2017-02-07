var express = require('express');  
var app = express(); 
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  
app.use(express.static('assets'));

app.get('/', function(req, res) {  
  res.send('<h1>Week2 Homework: Express2</h1>');  
});  

app.get('/view/', function(req, res) {  
  res.render('example', {  
    title: 'week2 Homework: Express2',  
    cats: ['Garfield', 'Hello Kitty', 'Tom'],
    person: {
      name: 'Nico',
      sex: 'female'
    },
    html: "<h3>Here is code block test.</h3>"
  });   
});  

app.get('/view/html', function(req, res) {
  const options = {
    root: './views/'
  }
  res.sendFile('example.html', options);
})

app.listen(3000, function() {  
  console.log('Listening on port 3000');  
});   