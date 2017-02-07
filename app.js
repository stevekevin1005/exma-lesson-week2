var express = require('express');  
var app = express(); 

// app.set('view engine', 'jade');
app.set('view engine', 'ejs');  

app.use(express.static('assets'));

app.get('/', function(req, res) {  
  res.send('<h1>jade & express 範例</h1>');  
});  

app.get('/views/', function(req, res) {  
  res.render('example', {  
    title: 'Self Introduction',  
    contact: ['FB: Hsiao Jung', 'Email: jhaha219@yahoo.com.tw', 'Cellphone: 0933867785'],
    person: {
      name: '陳筱蓉',
      sex: 'Female',
      school: 'NTOU',
      club: 'PopMusicClub',
    },
  });   
});  

app.listen(3000, function() {  
  console.log('Listening on port 3000');  
});  