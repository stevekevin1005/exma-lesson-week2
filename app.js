var express = require('express');  
var app = express(); 
var http=require('http');
const path = require("path");
const port=3000;

app.set('view engine', 'jade');  
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);

app.use(express.static("assets"));

app.get('/', function(req, res) {  
  res.render('example.jade', {  
    title: 'Title test (JADE)',  
    heros: ['Talon', 'Talon', 'Talon'],
    me: {
      name: 'Talon',
      hobby: 'running in the summon’s rift'
    },
    html: "<h2><i>Talon~</i></h2>"
  });    
});  

app.get('/test', function(req, res) {  
  res.send('<h1>範例</h1>');  
}); 

app.get('/ejs', function(req, res) {  
  res.render('example.ejs', {  
    title: 'Title test (EJS)',  
    heros: ['Talon', 'Katarina', 'Other Assassins'],
    me: {
      name: 'JJJason',
      sex: 'unknown'
    },
    html: "<h2><i>This is html code</i></h2>"
  });   
});  

http.createServer(app)
.listen(port, ()=> {
  console.log('App listening on port ' + port + ' !');
})
