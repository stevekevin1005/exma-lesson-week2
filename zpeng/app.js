const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const port = 3000;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
console.log(__dirname);

app.use(express.static("assets"));

app.get('/', function(req, res) {
  res.render('index.jade', {
    name: 'zpeng',
    title: 'Jade',
    engine: ['html','jade','ejs'],
    person: {
      shan: '87',
      johnny: '86'
    },
    html: "<h2>This is html code</h2>"
  });
});

app.get('/ejs', function(req, res) {
  res.render('index.ejs', {
    name: 'zpeng',
    title: 'Ejs',
    engine: ['html','jade','ejs'],
    person: {
      shan: '87',
      johnny: '86'
    },
    html: "<h3>This is html code</h3>"
  });
});

app.get('/html', function(req, res) {
  const options = {
    root: './views'
  }
  res.sendFile('index.html', options);
});

http.createServer(app)
.listen(port, () => {
  console.log("app is listening on " + port);
});
