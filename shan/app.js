var express = require('express');
var app = express();
var http=require('http');
const port=3000;

// app.set('view engine', 'jade');
app.set('view engine', 'ejs');

app.use(express.static('assets'));


app.get('/', function(req, res) {
  res.render('index', {
    title: 'Intro',
    aboutme: {
      name: 'Shan',
      favorite:{
        sports:'basketball and baseball',
        hobby:'Read novel and Watch movie'
      }

    },
  });
});
http.createServer(app)
.listen(port, function() {
  console.log('Listening on port'+port);
});
